<template>
  <div class="">
    <table>
      <tr>
        <th>Stall</th>
        <th>Brand</th>
        <th>Owner</th>
        <th>Created at</th>
      </tr>
      <tr v-for="stall in stalls" :key="stall.id">
        <td>{{ stall.type }}</td>
        <td>{{ stall.brand }}</td>
        <td>{{ stall.owner || 'N/A' }}</td>
        <td>{{ new Date(stall.created_at).toLocaleString() }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Inputbar from '../components/props/Inputbar.vue';
import Inputlabel from '../components/props/Inputlabel.vue';
import RegisButton from '../components/props/RegisButton.vue';
import SMLlogo from '../components/props/SMLlogo.vue';

export default {
  data() {
    return { 
      stalls: []
    }
  },
  components: {
    Inputbar, Inputlabel, RegisButton, SMLlogo
  },
  mounted() {
    this.fetchStalls();
  },
  methods: {
    async fetchStalls() {
      try {
        const response = await this.$api.adminStalls();
        this.stalls = response.data;
      } catch (error) {
        console.error('Error fetching stalls:', error);
      }
    }
  }
}
</script>