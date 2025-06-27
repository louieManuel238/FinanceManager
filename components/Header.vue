<script lang="ts">
</script>
<template>
    <nav class="container">
        <ul>
            <li><NuxtLink to="/">FinanceManager</NuxtLink></li>
        </ul>
        <ul>
            <li><NuxtLink :to="{name: 'expenses'}">Expenses</NuxtLink></li>
            <li><NuxtLink :to="{name: 'income'}"> Income </NuxtLink></li>
        </ul>
    </nav>
</template>