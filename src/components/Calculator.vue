<script setup>
import { ref } from "vue";

import { NGrid, NGridItem, NInputNumber, NSpace } from "naive-ui";

// import dollar from "../assets/images/icon-dollar.svg";
// import person from "../assets/images/icon-person.svg";

const inputs = ref({
  bill: null,
  tip: null,
  customTip: null,
  numberOfPeople: null,
});
</script>

<template>
  <div class="light-green">
    <NSpace vertical>
      <label for="bill">Bill</label>
      <input
        type="number"
        v-model="ref.bill"
        class="input"
        name="bill"
        id="bill"
      />

      <div class="selection">
        <label>Select Tip %</label>
        <ul class="options">
          <li>5%</li>
          <li>10%</li>
          <li>15%</li>
          <li>25%</li>
          <li>50%</li>
          <input
            type="number"
            v-model="customTip"
            name="custom"
            id="custom"
            placeholder="Custom"
          />
        </ul>
      </div>

      <label for="people">Number of people</label>
      <input
        type="number"
        v-model="numberOfPeople"
        class="input"
        name="people"
        id="people"
      />
    </NSpace>
  </div>
</template>

<style scoped>
.light-green {
  height: 300px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: hsl(189, 41%, 97%);
  padding: 0.5rem 0.5rem;
}

input[class="input"] {
  height: 30px;
}

input:focus {
  outline: none;
  border: 3px solid hsl(185, 41%, 84%);
}

.selection {
  margin: 1rem 0;
}

.options {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  padding: 0;
}

li {
  background-color: hsl(183, 100%, 15%);
  color: hsl(0, 0%, 100%);
  text-align: center;
  border-radius: 4px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

li:hover {
  background-color: hsl(185, 41%, 84%);
  color: hsl(183, 100%, 15%);
}
</style>
