import { createStore } from "vuex";
import { cartStates, cartMutations } from "./storeStateMutations/cart";

export default createStore({
  state: {
    cartStates,
  },
  mutations: {
    ...cartMutations,
  },
});
