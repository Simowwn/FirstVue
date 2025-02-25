<template>
  <div class="full-screen">
    <form class="form-container" @submit.prevent="handleLogin">
      <SMLlogo/>
      <h1>Login</h1>
      <br>
      <Inputlabel label="Email" /> 
      <Inputbar 
        v-model="email"
        placeholder="Enter your email"
      />
      <Inputlabel label="Password" /> 
      <Inputbar 
        v-model="password"
        type="password" 
        placeholder="Enter your password" 
      />
      <RegisButton 
        type="submit"
        label="Login"
      />
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { authService } from '../services/auth';
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import SMLlogo from '../components/props/SMLlogo.vue';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Inputbar, Inputlabel, RegisButton, SMLlogo
  },
  methods: {
    async handleLogin() {
      try {
        this.error = null;
        const response = await authService.login({
          email: this.email,
          password: this.password
        });
        
        if (response.data && response.data.access) {
          // Store the tokens
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          
          // Check if the user is staff and redirect accordingly
          if (response.data.user && response.data.user.is_staff) {
            await this.$router.push('/admin/stall');
          } else {
            // Redirect to stall page after successful login
            await this.$router.push('/stall');
          }
        } else {
          this.error = 'Invalid login response';
        }
      } catch (error) {
        console.error('Login error:', error);
        this.error = error.response?.data?.detail || 
                     error.response?.data?.error || 
                     'Login failed. Please check your credentials.';
      }
    } 
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>