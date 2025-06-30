<script setup lang="ts">
const {data, error, status} = await useFetch('/api/income/1');
</script>
<template>
    <h3>income Details</h3>
    <p>{{ data?.id}}</p>
    <p>{{ data?.amount}}</p>
    <p>{{ data?.category}}</p>
    <p v-for="ability in data?.r.abilities">{{ ability.ability }}</p>
</template>