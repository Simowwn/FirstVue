<template>
    <div class="full-screen">
      <form @submit.prevent="handleRegister" class="form-container">
        <SMLlogo/>
        <h1>SignUp</h1>
        <br>
        <Inputlabel label="First Name" /> 
        <Inputbar v-model="first_name" placeholder="Enter your email"/>

        <Inputlabel label="Last Name" /> 
        <Inputbar v-model ="last_name" placeholder="Enter your email"/>

        <Inputlabel label="Email" /> 
        <Inputbar v-model="email" placeholder="Enter your email"/>

        <Inputlabel label="Password" /> 
        <Inputbar v-model="password" type="password" placeholder="Enter your password" />

        <Inputlabel label="Confirm Password" /> 
        <Inputbar v-model="confirm_password" type="password" placeholder="Enter your password again" />

        <RegisButton type="submit" label="Sign Up"/>
      </form>
      <p v-if="error" class="error-message">{{error}}</p>
    </div>
  </template>
  
  <script>
  import { handleError } from 'vue';
import Inputbar from '../components/props/Inputbar.vue';
  import Inputlabel from '../components/props/Inputlabel.vue';
  import RegisButton from '../components/props/RegisButton.vue';
  import SMLlogo from '../components/props/SMLlogo.vue';
  import { userService } from '../services/api'
  
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
        error: null
       }

    },
    methods: {
        async handleRegister() {
            try {
                this.error = null
                const response = await userService.register({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password,
                })
                console.log('Registration successful:', response.data)
                await this.$router.push('/')
            } catch (error) {
                console.error('Registration error', error )
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
</style>