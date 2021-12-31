"use strict";

var fullName = function fullName(user) {
  return user.firstName.concat(" ", user.lastName);
};

var user = {
  firstName: "Josh",
  lastName: "Perez"
};

var element = React.createElement(
  "h1",
  { className: "big-header" },
  "Hello ",
  fullName(user)
);

console.log(element.props);

var domContainer = document.querySelector("#main_div");
ReactDOM.render(element, domContainer);