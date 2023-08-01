import { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => {
    if (this.state.count < 10) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  };

  onDecrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    const { count } = this.state;

    // console.log(count);
    return (
      <>
        <h4>Counter</h4>
        <div className="flexCenter">
          <button type="submit" onClick={this.onIncrement}>
            +
          </button>
          <p className="m-20">{count}</p>
          <button type="submit" onClick={this.onDecrement}>
            -
          </button>
        </div>
      </>
    );
  }
}
export default Counter;
