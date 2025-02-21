<template>
  <div class="full-screen">
    <form class="form-container">
      <SMLlogo/>
      <h1>Admin Login</h1>
      <br>
      <Inputlabel label="Email" /> 
      <Inputbar placeholder="Enter your email"/>
      <Inputlabel label="Password" /> 
      <Inputbar type="password" placeholder="Enter your password" />
      <RegisButton label="Login"/>
    </form>
  </div>
</template>

<script>
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import SMLlogo from '../components/props/SMLlogo.vue';

export default {
  data() {
    return { name: 'John' }
  },
  components: {
    Inputbar,Inputlabel,RegisButton,SMLlogo
  }
}
</script>