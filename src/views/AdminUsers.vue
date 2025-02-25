<template>
  <div class="">
    <Navbar/>
    <h1>Admin Users </h1>
    <div class="card-container">
      <div class="card" v-for="user in users" :key="user.id">
        <div class="card-action">
          <font-awesome-icon :icon="['fas', 'edit']" @click="editUser(user)" class="action-icon edit-icon" />
          <font-awesome-icon :icon="['fas', 'trash-alt']" @click="deleteUser(user)" class="action-icon delete-icon" />
        </div>
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'user']" class="fa-3x" /> 
        </div>
        
      <h3 class="card-title">{{ user.first_name + " "+ user.last_name }}</h3>
      <p class="card-email">{{ user.email }}</p>
      <p class="card-date">{{ user.date_joined }}</p>

    </div>
    </div>


   <Teleport to="body">
      <ModalUsers 
        v-if="showModal"
        :user="selectedUser"
        @close="closeModal"
        @save="saveUser"
      />
   </Teleport>
  </div>
</template>

<script>
import Navbar from '../components/props/AdminNavbar.vue';
import { adminService } from '../services/admin';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import ModalUsers from '@/components/props/ModalUser.vue';

library.add(fas); // Add solid icons to the library

export default {
  components: {
    Navbar,
    FontAwesomeIcon,
    ModalUsers
  },
  data() {
    return { 
      users: [],
      showModal: false,
      selectedUser: null
    }
  },
  mounted() {
    this.fetchAdminUsers();
  },
  methods: {
    async fetchAdminUsers() {
      try {
        const response = await adminService.adminUsers();
        console.log('Admin users API response:', response.data);
        this.users = response.data.map(user => ({
          ...user,
          id: user.id // Ensure the ID is included in the user object
        }));
      } catch (error) {
        console.error('Error fetching admin users:', error);
      }
    },

    async editUser(user) {
      this.selectedUser = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      };
      this.showModal = true;
    },
    
    closeModal() {
      this.showModal = false;
      this.selectedUser = null;
    },
    async saveUser(updatedUser) {
      try {
        if (!updatedUser || !updatedUser.id) {
          console.error('Cannot update user: Invalid user data', updatedUser);
          return;
        }
        
        const userData = {
          first_name: updatedUser.first_name,
          last_name: updatedUser.last_name,
          email: updatedUser.email,
        };
        
        console.log('Updating user with ID:', updatedUser.id, 'Data:', userData);
        await adminService.editUsers(updatedUser.id, userData);
        await this.fetchAdminUsers();
        this.closeModal();
        alert('User updated successfully');
      } catch (error) {
        console.error('Error updating user:', error);
        alert('Failed to update user. Please try again.');
      }
    },

    async deleteUser(user) {
      try {
        if (!user || !user.id) {
          console.error('Cannot delete user: Invalid user ID', user);
          return;
        }
        
        if (!confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`)) {
          return;
        }
        
        console.log('Attempting to delete user:', user.id);
        await adminService.deleteUsers(user.id);
        this.users = this.users.filter(u => u.id !== user.id);
        alert('User deleted successfully');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user. Please try again.');
      }
    },
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
.card-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
}
.card{
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.card:hover{
  background-color: #0F2F76;
  color: white;
}
.icon-container{
  padding: 10px;
}
.card-title{
  font-size: 1rem;
  font-weight: bold;
}
.card-email{
  font-size: 0.7rem;
}

.card-action {
  display: flex !important;
  justify-content: flex-end;
  width: 100%;

}

.edit-icon {
  background-color: #FF9D23; 

  padding: 5px;
  border-radius: 50px;
  color: white;
  margin-right: 5px;
}
.edit-icon:hover{
  background-color: #FF9D23; 
  padding: 8px;
}
.delete-icon {
  background-color: #D84040;
  padding: 5px;
  border-radius: 50px;
  color: white;
}
.delete-icon:hover {
  background-color: #D84040;
  padding: 8px;
}
</style>