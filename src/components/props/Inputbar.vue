<template>
    <div>
        <input 
            :type="type" 
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="input-bar"
        />
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        modelValue: String
    },
    emits: ['update:modelValue']
}
</script>
<style>
    .input-bar{
        width: 100%;
        padding: 10px;
        border: 1px solid #333333;
        border-radius: 5px;
        margin: 10px 0px 10px 0 ;
    }
</style>