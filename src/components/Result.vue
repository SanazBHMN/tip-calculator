<script setup>
import ResetButton from "./ResetButton.vue";
import { useCalculator } from "@/composables/useCalculator";

const { state, reset } = useCalculator();
</script>

<template>
  <div class="green">
    <div class="result-screen">
      <div class="row">
        <div>
          <p class="title">Tip Amount</p>
          <small>/ person</small>
        </div>
        <div class="result">
          ${{
            state.tipPerPerson === 0
              ? "0.00"
              : Math.round(state.tipPerPerson * 100) / 100
          }}
        </div>
      </div>
      <div class="row">
        <div>
          <p class="title">Total</p>
          <small>/ person</small>
        </div>
        <div class="result">
          ${{
            state.totalPerPerson === 0
              ? "0.00"
              : Math.round(state.totalPerPerson * 100) / 100
          }}
        </div>
      </div>
    </div>
    <ResetButton @click="reset" />
  </div>
</template>

<style scoped>
.green {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding: 2rem;
  background-color: hsl(183, 100%, 15%);
  color: hsl(172, 67%, 45%);
  border-radius: 0.8rem;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.title {
  color: hsl(0, 0%, 100%);
  margin-bottom: 0;
}

small {
  color: hsl(186, 14%, 43%);
}

.result {
  font-size: 32px;
}
</style>
