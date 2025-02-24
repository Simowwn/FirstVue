<template>
  <div class="">
    <Navbar/>
    <h1>Stall List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Type</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Owner Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stall in stalls" :key="stall.id">
          <td>{{ stall.id }}</td>
          <td>{{ stall.brand }}</td>
          <td>{{ stall.type }}</td>
          <td>{{ stall.created_at }}</td>
          <td>{{ stall.updated_at }}</td>
          <td>{{ stall.owner.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import SMLlogo from '../components/props/SMLlogo.vue';
import Navbar from '../components/props/Navbar.vue';
import { userService } from '../services/api';

export default {
  data() {
    return { 
      stalls: []
    }
  },
  components: {
    Inputbar, Inputlabel, RegisButton, SMLlogo, Navbar
  },
  mounted() {
    this.fetchStalls();
  },
  methods: {
    async fetchStalls() {
      try {
        const response = await userService.getStalls();
        this.stalls = response.data;
      } catch (error) {
        console.error('Error fetching stalls:', error);
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
</style>