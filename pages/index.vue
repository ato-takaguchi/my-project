<template>
  <div>
    <h1>Data from microCMS</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
const { data } = await useFetch('/blogpost');
</script>
