import React from "react";
import { connect } from "react-redux";
import { setStore } from "../../store/action";
import { IState } from "../../store/type";
import s from "./index.m.scss";
interface IHomeProps {
  num: number;
  setStore: (v: IState) => void;
  sss: number;
}
class Home extends React.Component<IHomeProps> {
  render() {
    const { num, setStore, sss } = this.props;
    return (
      <div>
        <div className={s["a"]}>
          {num}
          {sss}
        </div>
        <button
          onClick={() => {
            setStore({
              num: num + 1,
              sss: num + 1,
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => {
    const { num, sss } = state;
    return {
      num,
      sss,
    };
  },
  () => ({
    setStore: (state: IState) => setStore(state),
  })
)(Home);
