<script setup>
import Attribution from "./components/Attribution.vue";
import logo from "../src/assets/images/logo.svg";
import { NDivider, NGrid, NGridItem, NImage } from "naive-ui";
</script>

<template>
  <!-- 
  Provided text for the entire app:

  Bill

  Select Tip %
  5%
  10%
  15%
  25%
  50%
  Custom

  Number of People

  Tip Amount
  / person

  Total
  / person

  Reset -->
  <main>
    <div class="logo">
      <NImage width="80" :src="logo" />
    </div>
    <div class="sections-container">
      <NGrid cols="1 s:2" item-responsive responsive="screen">
        <NGridItem>
          <div class="light-green">
            m-: hidden<br />
            m ~ l: span 1<br />
            l+: span 2
          </div>
        </NGridItem>
        <NGridItem>
          <div class="green">This is where the result gets shown</div>
        </NGridItem>
      </NGrid>
    </div>
  </main>
</template>

<style scoped>
.logo {
  width: fit-content;
  margin: 3rem auto 2rem;
}

.sections-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
}

.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}
.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: hsl(183, 100%, 15%);
  color: hsl(172, 67%, 45%);
  border-radius: 0.8rem;
}
</style>
