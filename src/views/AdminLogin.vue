<template>
  <div class="full-screen">
    <form class="form-container" @submit.prevent="adminHandleLogin">
      <SMLlogo/>
      <h1>Admin Login</h1>
      <br>
      <Inputlabel label="Email" /> 
      <Inputbar v-model="email" placeholder="Enter your email"/>
      <Inputlabel label="Password" /> 
      <Inputbar v-model="password" type="password" placeholder="Enter your password" />
      <RegisButton label="Login" type="submit"/>
    </form>
  </div>
</template>

<script>
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import SMLlogo from '../components/props/SMLlogo.vue';
import { userService } from '@/services/api';

export default {
  data() {
    return { 
      email: '',
      password: ''
    }
  },
  components: {
    Inputbar, Inputlabel, RegisButton, SMLlogo
  },
  methods: {
    async adminHandleLogin() {
      try {
        const credentials = { email: this.email, password: this.password };
        await this.userService.adminLogin(credentials); // Ensure $api is defined
        // Handle successful login (e.g., redirect or show a success message)
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
}
</script>