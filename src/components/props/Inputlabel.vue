<template>
   <h4 class="InputLabel">{{ label }}</h4>
</template>

<script>
    export default{
        props: {
            label:String
        }
    }
</script>

<style>
    .InputLabel{
        font-weight: 600;
    }
</style>
