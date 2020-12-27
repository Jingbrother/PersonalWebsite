import a from "./a";
const initialState = {
  ...a,
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  let obj = {};
  for (let key in action) {
    if (key !== "type") {
      obj = {
        type: key,
        value: action[key],
      };
    }
  }
  return { ...state, [obj.type]: obj.value };
};
export default reducer;
