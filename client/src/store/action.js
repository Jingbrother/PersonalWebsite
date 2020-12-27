export const setStore = (display, state) => {
  for (let key in state) {
    display({
      type: key,
      [key]: state[key],
    });
  }
};
