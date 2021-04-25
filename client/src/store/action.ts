import store from "./index";
import { IState } from "./type";
export const setStore = (state: IState) => {
  if (state) {
    if (typeof state !== "object") {
      throw new Error(
        "setStore的参数不得是" + typeof state + ",应为:{[key: string]: any;}"
      );
    } else {
      if (JSON.stringify(state) === "{}") {
        throw new Error(
          "setStore的参数不得是{}" + ",应为:{[key: string]: any;}"
        );
      }
    }
  } else {
    throw new Error(
      "setStore的参数不得是" + state + ",应为:{[key: string]: any;}"
    );
  }
  for (let key in state) {
    if(key === 'type'){
      throw new Error(
        "setStore的参数中key值不得是type,应为其他:{[key: string]: any;}"
      );
    }else{
      store.dispatch({
        type: "SET_STORE",
        [key]: state[key],
      });
    }
  }
};
