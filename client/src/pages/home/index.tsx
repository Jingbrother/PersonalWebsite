import React from "react";
import { connect } from "react-redux";
import { setStore } from "../../store/action";
import s from "./index.m.scss";
interface IHomeProps {
  num: number;
  setNum: (v) => void;
}
class Home extends React.Component<IHomeProps> {
  render() {
    const { num, setNum } = this.props;
    return (
      <div>
        <div className={s["a"]}>{num}</div>
        <button
          onClick={() => {
            setNum({
              num: num + 1,
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
  (state) => ({
    num: state.num,
  }),
  (display) => {
    return {
      setNum: (state) => setStore(display, state),
    };
  }
)(Home);
