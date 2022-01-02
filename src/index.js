import React from "react";
import ReactDOM from "react-dom";

// const clock = document.querySelector("#clock");
const root = document.querySelector("#root");

const url =
  "http://api.weatherapi.com/v1/current.json?key=5f49cc1f080c4c2693b121152220201&q=London&aqi=no";

const weatherApi = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.current;
};

const response = await weatherApi(url).then((data) => {
  return data;
});

console.log(response);
const element = <p>sss</p>;

ReactDOM.render(element, root);
