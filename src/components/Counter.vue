<script setup>
import {ref} from 'vue'

let count = ref(0)
</script>

<template>
    <div>
        <h3>{{count}}</h3>
        <button @click="count++">counter</button>
    </div>
</template>