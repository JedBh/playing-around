import React from "react";
import ReactDOM from "react-dom";

const clock = document.querySelector("#clock");
const root = document.querySelector("#root");

const tick = () => {
  const element = (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(element, clock);
};

// components

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Gus" />
        <Welcome name="Walter" />
        <Welcome name="Jesee" />
      </div>
    );
  }
}

const header = <MyApp />;

ReactDOM.render(header, root);

setInterval(tick, 1000);
