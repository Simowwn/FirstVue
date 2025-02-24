<template>
  <div class="">
    <Navbar/>
    <h1>Admin Users </h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date Joined</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.date_joined }}</td>
        </tr>
      </tbody>
    </table>

    <div class="card" v-for="user in users" :key="user.id">
      <font-awesome-icon :icon="['fas', 'user']" />
      <h3>{{ user.first_name + " "+ user.last_name  }}</h3>
      <p>{{ user.email }}</p>
      <p>{{ user.date_joined }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/props/Navbar.vue';
import { userService } from '../services/api';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas); // Add solid icons to the library

export default {
  components: {
    Navbar,
    FontAwesomeIcon // Register the FontAwesomeIcon component
  },
  data() {
    return { 
      users: [] // Initialize as an empty array
    }
  },
  mounted() {
    this.fetchAdminUsers(); // Fetch admin users when the component is mounted
  },
  methods: {
    async fetchAdminUsers() {
      try {
        const response = await userService.adminUsers(); // Call the adminUsers method
        this.users = response.data; // Assign the fetched data to the users array
      } catch (error) {
        console.error('Error fetching admin users:', error);
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
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>