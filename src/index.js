import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Hello World",
      text: "Today we are learning React lists and keys!",
      time: new Date().toLocaleTimeString(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
        <button onClick={this.handleClick}>Refresh Clock</button>
      </div>
    );
  }
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((el) => <li>{el * 2}</li>);

ReactDOM.render(<ul>{doubled}</ul>, root);
