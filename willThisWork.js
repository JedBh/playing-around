"use strict";

// dom elements

var headerContainer = document.querySelector("#main_div");

function Welcome(props) {
  return React.createElement(
    "h1",
    null,
    "Hello, ",
    props.name
  );
}
ReactDOM.render(Welcome, headerContainer);