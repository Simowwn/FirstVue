<template>
    <div>
        <input :type="type" :placeholder="placeholder" class="inputbar">
    </div>
</template>
<script>
export default {
    props: {
    type: {
      type: String,
      default: "text", 
      
    },
    placeholder: {
        type: String,
        default: ""
      },
  },
}
</script>
<style>
    .inputbar{
        width: 100%;
        padding: 10px;
        border: 1px solid #333333;
        border-radius: 5px;
        margin: 10px 0px 10px 0 ;
    }
</style>