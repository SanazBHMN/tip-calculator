<script setup>
import { NButton } from "naive-ui";
</script>

<template>
  <NButton class="button" color="#26c0ab">RESET</NButton>
</template>

<style scoped>
.button {
  width: 100%;
  color: hsl(183, 100%, 15%);
}

.button:hover {
  background-color: hsl(185, 41%, 84%);
  color: hsl(183, 100%, 15%);
}
</style>
