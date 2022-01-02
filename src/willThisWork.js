"use strict";

// dom elements
const headerContainer = document.querySelector("#main_div");

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
ReactDOM.render(Welcome, headerContainer);
