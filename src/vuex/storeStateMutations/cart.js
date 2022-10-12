export const cartStates = [];
export const cartMutations = {
  addCart: function (state, payload) {
    state.cartStates.push(payload) 
  },
};

