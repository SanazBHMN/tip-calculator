<script setup>
import ResetButton from "./ResetButton.vue";
</script>

<template>
  <div class="green">
    <div class="result-screen">
      <div class="row">
        <div>
          <p class="title">Tip Amount</p>
          <small>/ person</small>
        </div>
        <div class="result">$4.27</div>
      </div>
      <div class="row">
        <div>
          <p class="title">Total</p>
          <small>/ person</small>
        </div>
        <div class="result">$32.79</div>
      </div>
    </div>
    <ResetButton />
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
