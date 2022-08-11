<script setup>
import {ref} from 'vue'
let msg = ref('')
let inputMsg = ref('')
</script>

<template>
    <div>
        <h1>{{msg}}</h1>
        <input type="text" v-model="inputMsg" placeholder="Enter a text"> 
        <button @click="msg = inputMsg">click</button>
    </div>
</template>