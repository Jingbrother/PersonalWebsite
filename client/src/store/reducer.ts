import test from "./test";
interface Iobj {
  type?: any;
  value?: any;
}
const initialState: any = {
  ...test,
};

const reducer = (state = initialState, action) => {
  let obj: Iobj = {};
  for (let key in action) {
    if (action[key] !== "SET_STORE") {
      obj = {
        type: key,
        value: action[key],
      };
    }
  }
  return { ...state, [obj.type]: obj.value };
};
export default reducer;
