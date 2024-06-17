<script setup>
import { NGrid, NGridItem } from "naive-ui";

import Header from "./components/Header.vue";
import Calculator from "./components/Calculator.vue";
import Result from "./components/Result.vue";
import Attribution from "./components/Attribution.vue";
</script>

<template>
  <main>
    <Header />
    <div class="sections-container">
      <NGrid
        cols="1 s:2"
        :x-gap="16"
        :y-gap="32"
        item-responsive
        responsive="screen"
      >
        <NGridItem>
          <Calculator />
        </NGridItem>
        <NGridItem>
          <Result />
        </NGridItem>
      </NGrid>
    </div>
  </main>
</template>

<style scoped>
.sections-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
}
</style>
