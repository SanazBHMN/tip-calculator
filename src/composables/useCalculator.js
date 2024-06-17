import { reactive } from "vue";

const state = reactive({
  bill: 0,
  tip: 0,
  numberOfPeople: 0,
  tipAmount: 0,
  total: 0,
  tipPerPerson: 0,
  totalPerPerson: 0,
});

const tipPercentage = ["5", "10", "15", "25", "50"];

const reset = () => {
  state.bill = 0;
  state.tip = 0;
  state.numberOfPeople = 0;
  state.tipAmount = 0;
  state.total = 0;
  state.tipPerPerson = 0;
  state.totalPerPerson = 0;
};

export const useCalculator = () => {
  const getTipNumber = (number) => {
    state.tip = Number(tipPercentage[number]);
  };

  const calculateTotalTip = () => {
    return state.bill * (state.tip / 100);
  };

  const calculateTotalBill = () => {
    let totalTip = calculateTotalTip();

    return state.bill + totalTip;
  };

  const calculateTipPerPerson = () => {
    let totalTip = calculateTotalTip();

    state.tipPerPerson = totalTip / state.numberOfPeople;
  };

  const calculateTotalPerPerson = () => {
    let totalBill = calculateTotalBill();

    state.totalPerPerson = totalBill / state.numberOfPeople;
  };

  return {
    state,
    tipPercentage,
    getTipNumber,
    calculateTipPerPerson,
    calculateTotalPerPerson,
    reset,
  };
};
