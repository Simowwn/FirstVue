<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Edit Stall</h2>


      <Inputlabel label="ID" />
      <Inputbar v-model="editedStall.id" placeholder="Edit Id" disabled />
      <Inputlabel label="Email" />
      <Inputbar v-model="editedStall.owner.email" placeholder="Edit email" />
      <Inputlabel label="Brand" />
      <Inputbar v-model="editedStall.brand" placeholder="Edit brand" />
      <Inputlabel label="Type" />
      <Inputbar v-model="editedStall.type" placeholder="Edit type" />
      <div class="button-group">

        <button @click="handleSave" class="btn-save">Save</button>
        <button @click="$emit('close')" class="btn-cancel">Cancel</button>
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
      editedStall: {
        id: '',
        owner: {
          email: ''
        },
        brand: '',
        type: '',
        created_at: '',
        updated_at: ''
      }
    }
  },
  components: {
    Inputbar,
    Inputlabel,
    RegisButton
  },
  created() {
    // Deep copy the stall data to avoid directly mutating props
    this.editedStall = JSON.parse(JSON.stringify(this.stall));
  },
  methods: {
    handleSave() {
      const updatedStall = {
        id: this.editedStall.id,
        owner: {
          email: this.editedStall.owner.email
        },
        brand: this.editedStall.brand,
        type: this.editedStall.type,
        created_at: this.editedStall.created_at,
        updated_at: this.editedStall.updated_at
      };
      this.$emit('save', updatedStall);
      this.$emit('close');
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
  width: 50%;
}

.button-group {
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
  background-color: #218838; 
  padding: 6px;
}
.btn-cancel {
  background-color: #FF4C4C;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-cancel:hover {
  background-color: #ff6666; 
  padding: 6px;
}
</style> 