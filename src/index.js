import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Form was Submitted! With the name: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<NameForm />, root);
