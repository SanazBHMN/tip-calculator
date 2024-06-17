<script setup>
import { useCalculator } from "@/composables/useCalculator";
import { NSpace } from "naive-ui";
import { watch } from "vue";

const {
  state,
  tipPercentage,
  getTipNumber,
  calculateTipPerPerson,
  calculateTotalPerPerson,
} = useCalculator();

const handleTip = (index) => {
  state.customTip = "";
  getTipNumber(index);
};

watch(state, () => {
  calculateTipPerPerson();
  calculateTotalPerPerson();
});
</script>

<template>
  <div class="light-green">
    <NSpace vertical>
      <label for="bill">Bill</label>
      <input
        type="number"
        v-model="state.bill"
        class="input"
        name="bill"
        id="bill"
        placeholder="0"
      />
      <div class="selection">
        <label>Select Tip %</label>
        <ul class="options">
          <li
            v-for="(amount, index) in tipPercentage"
            :key="amount"
            @click="handleTip(index)"
          >
            {{ amount }}%
          </li>
          <input
            type="number"
            v-model="state.customTip"
            name="custom"
            id="custom"
            placeholder="Custom"
          />
        </ul>
      </div>

      <label for="people">Number of people</label>
      <input
        type="number"
        v-model="state.numberOfPeople"
        class="input"
        name="people"
        id="people"
        placeholder="0"
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
