<script setup>
import { NImage } from "naive-ui";

import logo from "../assets/images/logo.svg";
</script>

<template>
  <div class="logo">
    <NImage width="80" :src="logo" />
  </div>
</template>

<style scoped>
.logo {
  width: fit-content;
  margin: 3rem auto 2rem;
}
</style>
