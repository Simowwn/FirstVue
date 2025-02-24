<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Edit Stall</h2>
      <Inputlabel label="Brand" />
      <Inputbar v-model="editedStall.brand" placeholder="Edit brand" />
      <Inputlabel label="Type" />
      <Inputbar v-model="editedStall.type" placeholder="Edit type" />
      <div class="modal-buttons">
        <button @click="save" class="btn-save" type="submit">Save</button>
        <button @click="close" class="btn-close">close</button>
      </div>
    </div>
  </div>
</template>

<script>
import Inputbar from './Inputbar.vue';
import Inputlabel from './Inputlabel.vue';
import RegisButton from './RegisButton.vue';

export default {
  props: {
    stall: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedStall: { ...this.stall } // Create a copy of the stall to edit
    };
  },
  components: {
    Inputbar,
    Inputlabel,
    RegisButton
  },
  methods: {
    close() {
      this.$emit('close'); // Emit close event to parent
    },
    save() {
      this.$emit('save', this.editedStall); // Emit save event with edited stall data
    }
  },
  watch: {
    stall: {
      handler(newStall) {
        this.editedStall = { ...newStall }; // Update editedStall when stall prop changes
      },
      immediate: true // Run the handler immediately on component creation
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 100px;
}
.btn-save {
  background-color: #1B8F63;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-save:hover {
  background-color: #ff6666; 
  padding: 8px;
}
.btn-close {
  background-color: #FF4C4C;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-close:hover {
  background-color: #ff6666; 
  padding: 8px;
}
</style> 