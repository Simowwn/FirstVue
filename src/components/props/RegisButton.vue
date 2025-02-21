<template>
    <button 
        :type="type" 
        class="regis-button"
        @click="$emit('click')"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: String,
        type: {
            type: String,
            default: 'button'
        }
    },
    emits: ['click']
}
</script>

<style>
    .regis-button{
        padding: 10px;
        border: 0;
        border-radius: 5px;
        background-color: #213555;
        width: 100%;
        color: white;
        margin: 10px 0px 10px 0;
        font-weight: 400;
    }
    .regis-button:hover {
        padding: 10.5px;
        border: 0;
        border-radius: 5px;
        background-color: #3674B5;
    }
</style>