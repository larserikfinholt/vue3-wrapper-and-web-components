<script setup lang="ts">
import { ref } from 'vue'
import SmiButton from '../components/SmiButton.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <h3>My custom element {{msg}}</h3>
    <p>Below should there be two buttons</p>
    <el-button type="success">Direct use</el-button>
    <SmiButton type="success" round>Via wrapper</SmiButton>
</template>


