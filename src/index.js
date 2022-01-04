import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      increment: 0,
    };
    // this binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((state) => ({
      increment: state.increment + 1,
    }));
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={this.increment}>{this.state.increment}</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, root);
