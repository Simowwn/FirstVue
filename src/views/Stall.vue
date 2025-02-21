<template>
  <div class="row">
      <div class="col stall-form">
        <form class="form-container">
          
      <h1 class="stall-title">Register Stalls</h1>
      <h1>Now!</h1>
      <br>
      <Inputlabel label="Brand" /> 
      <Inputbar placeholder="Enter your brand"/>
      <Inputlabel label="Type" /> 
      <Inputbar placeholder="Enter your type"/>
      <RegisButton label="Register"/>
    </form>
      </div>
      
       <div class="stall-list">
          <table>
            <tr>
              <th>Stall</th>
              <th>Brand</th>
              <th>Created at</th>
            </tr>
            <tr>
              <td>Egboy</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Egboy</td>
              <td>Francisco Chang</td>
              <td>MexicoLalalala</td>
            </tr>
          </table>
       </div>

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