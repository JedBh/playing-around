import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.numbers = props.numbers;
    this.listItems = this.listItems.bind(this);
  }

  listItems() {
    return this.numbers.map((number) => {
      return <li key={number.toString()}>{number}</li>;
    });
  }

  render() {
    return <ul>{this.listItems()}</ul>;
  }
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />, root);
