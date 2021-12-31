"use strict";

const fullName = (user) => {
  return user.firstName.concat(" ", user.lastName);
};

const user = {
  firstName: "Josh",
  lastName: "Perez",
};

const element = <h1>Hello {fullName(user)}</h1>;

const domContainer = document.querySelector("#main_div");
ReactDOM.render(element, domContainer);
