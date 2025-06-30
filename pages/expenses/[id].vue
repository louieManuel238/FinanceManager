<script setup lang="ts">
const {data, error, status} = await $fetch('/api/income/1');
console.log("AAAA")
</script>
<template>
    <h3>ex Details</h3>
    <p>{{ data }}</p>
</template>