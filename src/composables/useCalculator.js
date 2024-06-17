import { reactive } from "vue";

const state = reactive({
  bill: "",
  tip: 0,
  customTip: "",
  numberOfPeople: "",
  tipAmount: 0,
  total: 0,
  tipPerPerson: 0,
  totalPerPerson: 0,
});

const tipPercentage = ["5", "10", "15", "25", "50"];

const reset = () => {
  state.bill = "";
  state.tip = 0;
  state.customTip = "";
  state.numberOfPeople = "";
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
    //   return state.bill * (state.tip / 100);

    return state.customTip > 0 && state.customTip !== ""
      ? state.bill * (state.customTip / 100)
      : state.bill * (state.tip / 100);
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
