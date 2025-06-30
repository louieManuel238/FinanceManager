<script lang="ts" setup>
const {data, error, status} = await useFetch('/api/income')
</script>
<template>
    <h2>Income</h2>
    <ul>
    <li v-for="income in data" :key="income.id">    
        <NuxtLink :to="{ name: 'incomes-id', params: { id: income.id } }">{{ income.amount }}</NuxtLink>
        {{ income.category }}
        {{ income.description }}
    </li>
    </ul>
</template>