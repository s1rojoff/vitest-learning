<script setup>
import {ref} from 'vue'
let name = ref('')
</script>

<template>
    <form @submit.prevent="$emit('formSubmitted', {name: name})">
        <input type="text" v-model="name">
        <button type="submit">Submit</button>
    </form>
</template>