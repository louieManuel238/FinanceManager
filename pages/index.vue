<script setup lang="ts">
const {data, error, status} = await useFetch('/api/dashboard', {lazy: true});

</script>
<template>
    <h1>Dashboard</h1>
    <div class="container">
        <article v-if="status=== 'pending'" aria-busy="true"></article>
        <div v-else>
            <div v-for="(month, index) in data" :key="index">
                {{ month.month }}
                ${{ month.totalIncome }}
                ${{ month.totalExpenses }}
            </div>
        </div>
    </div>
</template>