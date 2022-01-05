import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// class NumberList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.numbers = props.numbers;
//     this.listItems = this.listItems.bind(this);
//   }

//   listItems() {
//     return this.numbers.map((number) => {
//       return <li key={number.toString()}>{number}</li>;
//     });
//   }

//   render() {
//     return <ul>{this.listItems()}</ul>;
//   }
// }

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.todos = [
      {
        id: 123, // this is the best way to set an id for an object
        text: "brush the dog",
      },
      {
        id: 920, // this is the best way to set an id for an object
        text: "join the army",
      },
      {
        id: 137, // this is the best way to set an id for an object
        text: "salvage Bilbo Baggins",
      },
    ];
    this.todoItemsWithId = this.todoItemsWithId.bind(this);
    this.todoItems = this.todoItems.bind(this);
  }

  todoItems() {
    return this.todos.map((todo, i) => {
      return <li key={i}>{todo.text}</li>; // this is another option, but it is not recommended
    });
  }

  todoItemsWithId() {
    return this.todos.map((todo) => {
      return <li key={todo.id}>{todo.text}</li>; // using id to key the list item
    });
  }

  render() {
    return (
      <div>
        <h3>With stable ID</h3>
        <ul>{this.todoItemsWithId()}</ul>
        <br></br>
        <h3>With index ID</h3>
        <ul>{this.todoItems()}</ul>
      </div>
    );
  }
}

// const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<Todo />, root);
