<script setup>
import { ref } from "vue";

import { NGrid, NGridItem, NInputNumber, NSpace } from "naive-ui";

// import dollar from "../assets/images/icon-dollar.svg";
// import person from "../assets/images/icon-person.svg";

const tipPercentage = ["5", "10", "15", "25", "50"];

const inputs = ref({
  bill: null,
  tip: null,
  customTip: null,
  numberOfPeople: null,
  tipPerPerson: null,
  totalPerPerson: null,
});

// Set the value of li elements to tip
const getTipNumber = (number) => {
  inputs.value.tip = Number(tipPercentage[number]);
};

const calculateTotalTip = () => {
  return inputs.value.bill * (inputs.value.tip / 100);
};

const calculateTotalBill = () => {
  let totalTip = calculateTotalTip();

  return inputs.value.bill + totalTip;
};

const calculateTipPerPerson = () => {
  let totalTip = calculateTotalTip();

  inputs.value.tipPerPerson = totalTip / inputs.value.numberOfPeople;
};

const calculateTotalPerPerson = () => {
  let totalBill = calculateTotalBill();

  inputs.value.totalPerPerson(totalBill / inputs.value.numberOfPeople);
};
</script>

<template>
  <div class="light-green">
    <button @click="calculateTotalPerPerson">click</button>
    <NSpace vertical>
      <label for="bill">Bill</label>
      <input
        type="number"
        v-model="inputs.bill"
        class="input"
        name="bill"
        id="bill"
      />

      <div class="selection">
        <label>Select Tip %</label>
        <ul class="options">
          <li
            v-for="(amount, index) in tipPercentage"
            :key="amount"
            @click="getTipNumber(index)"
          >
            {{ amount }}%
          </li>
          <input
            type="number"
            v-model="inputs.customTip"
            name="custom"
            id="custom"
            placeholder="Custom"
          />
        </ul>
      </div>

      <label for="people">Number of people</label>
      <input
        type="number"
        v-model="inputs.numberOfPeople"
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
