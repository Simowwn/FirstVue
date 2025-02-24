<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="col stall-form">
        <form class="form-container" @submit.prevent="handleStall">
          <h1 class="stall-title">Register Stalls</h1>
          <h1>Now!</h1>
          <br>
          <Inputlabel label="Brand" /> 
          <Inputbar placeholder="Enter your brand" v-model="brand"/>
          <Inputlabel label="Type" /> 
          <Inputbar placeholder="Enter your type" v-model="type"/>
          <RegisButton  type="submit"label="Register"/>
          <p v-if="error" class="error-message">{{ error }}</p>
        </form>
      </div>
      
      <div class="stall-list">
        <div class="card" v-for="stall in stalls" :key="stall.id"> 
          <img src="https://img.freepik.com/premium-vector/shop-icon-vector_942802-804.jpg" alt="Shop Icon" style="height: 90px;"/>
          <h4 class="card-brand">{{ stall.brand }}</h4>
          <p class="card-type">{{ stall.type }}</p>
          <div class="btn-container">
            <button class="btn-edit" @click="openEditModal(stall)">Edit</button>
            <button class="btn-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <teleport to="body">
      <EditModal v-if="isEditModalVisible" :stall="selectedStall" @close="closeEditModal" @save="updateStall" />
    </teleport>
    
  </div>
</template>

<script>
import { userService } from '../services/api';
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import Navbar from '../components/props/Navbar.vue';
import EditModal from '../components/props/EditModal.vue';

export default {
  data() {
    return { 
      brand: '',
      type: '',
      error: null,
      stalls: [],
      isEditModalVisible: false,
      selectedStall: null
    }
  },
  components: {
    Inputbar, Inputlabel, RegisButton, Navbar, EditModal
  },
  methods: {
    async handleStall() {
      try {
        this.error = null;
        console.log('Attempting to register stall with data:', {
          brand: this.brand,
          type: this.type
        });

        const response = await userService.registerStall({
          brand: this.brand,
          type: this.type
        });
        console.log('Stall registered successfully:', response.data);
        this.brand = '';
        this.type = '';
        await this.fetchStalls();
      } catch (error) {
        console.error('Error registering stall:', error);
        this.error = error.response?.data?.message || 'Registration failed. Please try again.';
        console.error('Detailed error response:', error.response);
        console.error('Full error object:', error);
      }
    },
    async fetchStalls() {
      try {
        const response = await userService.getStalls();
        this.stalls = response.data;
      } catch (error) {
        console.error('Error fetching stalls:', error);
      }
    },
   
    async updateStall(updatedStall) {
      try {
        await userService.editStalls(updatedStall.id, updatedStall);
        await this.fetchStalls();
        this.closeEditModal();
      } catch (error) {
        console.error('Error updating stall:', error);
        this.error = 'Failed to update stall. Please try again.';
      }
    },
    openEditModal(stall) {
      this.selectedStall = stall;
      this.isEditModalVisible = true;
    },
    closeEditModal() {
      this.isEditModalVisible = false;
      this.selectedStall = null;
    }
  },
  mounted() {
    this.fetchStalls();
  }
}
</script>

<style>
    .full-screen {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.stall-container {
  width: 50%; 
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}
.stall-title{
  font-weight: bold;
}
.stall-form{
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
}
.stall-list{

  width: 50%;
  height: 100vh;
  display: flex;
  justify-content:start;
  align-items: start;
  padding: 20px;
  flex-wrap: wrap;

}
table{
  width: 100%;
  border-collapse:collapse;
}
th{
  background-color: #143D60;
  
}
th, td {
  padding: 15px;
  text-align: left;
  border: 1px solid black;
}

.card{
  border: 1px solid black;
  border-radius: 5px;
  padding:10px;
  min-width: 180px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-brand{
  font-weight: bold;
}
.card-type{
  font-weight: normal;
}
.btn-container {
    display: flex !important;
    justify-content: space-evenly;
    width: 100px;
    margin: 10px 0px 10px 0px;
}
.btn-edit {
  background-color: #FFBE4C;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #ffc966; 
  padding: 8px;
}

.btn-delete {
  background-color: #FF4C4C;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: #ff6666; 
  padding: 8px;
}

</style>