<template>
  <div class="">
    <Navbar/>
    <h1>Stall List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Owner Email</th>
          <th>Brand</th>
          <th>Type</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Action</th>
   
        </tr>
      </thead>
      <tbody>
        <tr v-for="stall in stalls" :key="stall.id">
          <td>{{ stall.id }}</td>
          <td>{{ stall.owner.email }}</td>
          <td>{{ stall.brand }}</td>
          <td>{{ stall.type }}</td>
          <td>{{ stall.created_at }}</td>
          <td>{{ stall.updated_at }}</td>
          <td>
            <button @click="editStall(stall)" class="btn-edit m-1">Edit</button>
            <button @click="deleteStall(stall.id)" class="btn-delete m-1">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <!-- Add Teleport and Modal -->
    <Teleport to="body">
      <ModalStalls
        v-if="showModal"
        :stall="selectedStall"
        @close="closeModal"
        @save="saveStall"
      />
    </Teleport>
  </div>
</template>

<script>
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import SMLlogo from '../components/props/SMLlogo.vue';
import Navbar from '../components/props/AdminNavbar.vue';
import ModalStalls from '../components/props/ModalStalls.vue';
import { adminService } from '@/services/admin';

export default {
  data() {
    return { 
      stalls: [],
      showModal: false,
      selectedStall: null
    }
  },
  components: {
    Inputbar, Inputlabel, RegisButton, SMLlogo, Navbar, ModalStalls
  },
  mounted() {
    this.fetchStalls();
  },
  methods: {
    async fetchStalls() {
      try {
        const response = await adminService.getStalls();
        this.stalls = response.data;
      } catch (error) {
        console.error('Error fetching stalls:', error);
      }
    },
    async editStall(stall) {
      this.selectedStall = stall;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedStall = null;
    },
    async saveStall(updatedStall) {
      try {
        await adminService.updateStall(updatedStall.id, updatedStall);
        await this.fetchStalls();
        this.closeModal();
      } catch (error) {
        console.error('Error updating stall:', error);
      }
    },
    async deleteStall(id) {
      try {
        await adminService.deleteStall(id);
        await this.fetchStalls();

      } catch (error) {
        console.error('Error deleting stall:', error);
      }
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;

}

th {
  background-color: #0F2F76;
  color: white;
}
.m-1 {
  margin: 0 5px; /* Adjust the margin as needed for even spacing */
}

</style>