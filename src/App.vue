<template>
  <router-view></router-view>
</template>

<script>
import Inputbar from './components/props/Inputbar.vue';
import Inputlabel from './components/props/Inputlabel.vue';
import RegisButton from './components/props/RegisButton.vue';
import SMLlogo from './components/props/SMLlogo.vue';

  export default {
    data() {
      return { name: 'John' }
    },
    components: {
      Inputbar,Inputlabel,RegisButton,SMLlogo
    }
  }
</script>


<style>
.full-screen{
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3674B5;
}
.form-container {
  max-width:500px;
  width: 90%; 
  height: 80%;
  max-height: 700px;
  padding: 20px;
  border-radius: 10px;
  flex-wrap: wrap;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}
.stall-container {
  max-width:500px;
  width: 90%; 
  height: 80%;
  max-height: 700px;
  padding: 20px;
  border-radius: 10px;
  flex-wrap: wrap;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}
.row{
  display: flex;
  flex-direction: row;
}
.col{
  display: flex;
  flex-direction: coloumn;
}
</style>