<template>
    <div class="full-screen">
      <form @submit.prevent="handleRegister" class="form-container">
        <SMLlogo/>
        <h1>SignUp</h1>
        <br>
        <Inputlabel label="First Name" /> 
        <Inputbar v-model="first_name" placeholder="Enter your first name"/>

        <Inputlabel label="Last Name" /> 
        <Inputbar v-model ="last_name" placeholder="Enter your last name"/>

        <Inputlabel label="Email" /> 
        <Inputbar v-model="email" placeholder="Enter your email"/>

        <Inputlabel label="Password" /> 
        <Inputbar v-model="password" type="password" placeholder="Enter your password" />

        <Inputlabel label="Confirm Password" /> 
        <Inputbar v-model="confirm_password" type="password" placeholder="Enter your password again" />

        <div class="staff-checkbox-container">
          <Inputlabel label="Staff Status" />
          <input 
            type="checkbox" 
            id="staff-checkbox" 
            v-model="is_staff" 
            class="staff-checkbox"
          />
          <label for="staff-checkbox" class="checkbox-label">
            <strong>Register as admin (staff member)</strong>
          </label>
        </div>

        <RegisButton type="submit" label="Sign Up"/>
      </form>
      <p v-if="error" class="error-message">{{error}}</p>
      <p v-if="successMessage" class="success-message">{{successMessage}}</p>
    </div>
  </template>
  
  <script>
  import { handleError } from 'vue';
import Inputbar from '../components/props/Inputbar.vue';
  import Inputlabel from '../components/props/Inputlabel.vue';
  import RegisButton from '../components/props/RegisButton.vue';
  import SMLlogo from '../components/props/SMLlogo.vue';
  import { authService } from '../services/auth'
  
  export default {
    components: {
      Inputbar,Inputlabel,RegisButton,SMLlogo
    },
    data() {
       return {
        first_name: '',
        last_name:'',
        email:'',
        password: '',
        confirm_password: '',
        is_staff: false,
        error: null,
        successMessage: null
       }

    },
    methods: {
        async handleRegister() {
            try {
                this.error = null
                
                // Create the user data object with explicit boolean conversion
                const userData = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password,
                    is_staff: this.is_staff, // Remove the Boolean() wrapper - it's already a boolean
                }
                
                // Log the registration data for debugging
                console.log('Sending registration data:', {
                    ...userData,
                    is_staff_type: typeof userData.is_staff,
                    is_staff_value: userData.is_staff
                })
                
                const response = await authService.register(userData)
                console.log('Backend response:', response.data)
                
                this.successMessage = 'Registration successful! Redirecting to login...'
                
                setTimeout(() => {
                    this.$router.push('/')
                }, 1500)
            } catch (error) {
                console.error('Registration error:', error)
                if (error.response?.data) {
                    console.log('Backend error details:', error.response.data)
                }
                this.error = error.response?.data?.message || 'Registration failed.'
            }
        }
    }
  }
  </script>


<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}

.staff-checkbox-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.staff-checkbox {
  margin: 0 10px;
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.checkbox-label {
  margin-left: 5px;
  cursor: pointer;
}

input[type="checkbox"] {
  cursor: pointer;
}

.success-message {
  color: green;
  margin-top: 10px;
  font-weight: bold;
}
</style>