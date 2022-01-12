import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isGoing) {
      return (
        <div>
          <p>They canceled</p>
        </div>
      );
    }
    return (
      <div>
        <p>We'll be reciving {this.state.numberOfGuests} guests</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="isGoing">Is Going:</label>
          <input
            id="isGoing"
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
          <label for="numberOfGuests">Number Of Guests:</label>
          <input
            id="numberOfGuests"
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="submit" />
        </form>
        {this.handleSubmit}
      </div>
    );
  }
}

ReactDOM.render(<Reservation />, root);
