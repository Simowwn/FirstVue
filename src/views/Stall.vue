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
          <RegisButton label="Register"/>
          <p v-if="error" class="error-message">{{ error }}</p>
        </form>
      </div>
      
      <div class="stall-list">
        <table>
          <tr>
            <th>Stall</th>
            <th>Brand</th>
            <th>Owner</th> <!-- Add Owner column -->
            <th>Created at</th>
          </tr>
          <tr v-for="stall in stalls" :key="stall.id">
            <td>{{ stall.type }}</td>
            <td>{{ stall.brand }}</td>
            <td>{{ stall.owner?.email || 'N/A' }}</td> <!-- Display owner email or 'N/A' -->
            <td>{{ new Date(stall.created_at).toLocaleString() }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from '../services/api';
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import Navbar from '../components/props/Navbar.vue';

export default {
  data() {
    return { 
      brand: '',
      type: '',
      error: null,
      stalls: [] // Array to hold the list of stalls
    }
  },
  components: {
    Inputbar, Inputlabel, RegisButton, Navbar
  },
  methods: {
  async handleStall() {
    try {
      this.error = null; // Reset error
      const response = await userService.registerStall({
        brand: this.brand,
        type: this.type
      });
      console.log('Stall registered successfully:', response.data);
      this.brand = '';
      this.type = '';
      await this.fetchStalls(); // Fetch the updated list of stalls
    } catch (error) {
      console.error('Error registering stall:', error); // Log the error
      this.error = error.response?.data?.message || 'Registration failed.';
    }
  },
  async fetchStalls() {
    try {
      const response = await userService.getStalls(); // Call the getStalls method
      this.stalls = response.data; // Update the stalls array with the fetched data
    } catch (error) {
      console.error('Error fetching stalls:', error); // Log the error
    }
  }
},

  mounted() {
    this.fetchStalls(); // Fetch stalls when the component is mounted
  }
}
</script>

<style>
    .full-screen {
  height: 100vh;
  display: flex; /* Arrange children (forms) side by side */
  justify-content: center; /* Center forms horizontally */
  align-items: center; /* Center forms vertically */
  gap: 20px; /* Add space between the two forms */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
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
  justify-content:center;
  align-items: start;

}
table{
  width: 100%;
  border-collapse:collapse;
}
th{
  background-color: #143D60;
  
}
th, td {
  padding: 15px; /* Adjust cell spacing */
  text-align: left;
  border: 1px solid black;
}

</style>