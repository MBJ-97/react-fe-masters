import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

/* const App = () => {
  return React.createElement("div", {}, [
    // Array here is optional we can take it off
    // the react create element can be deleted here we can see how useful JSX is
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, { name: "Titi", animal: "bird", breed: "canari" }),
    React.createElement(Pet, { name: "Lisa", animal: "cat", breed: "siamois" }),
  ]);
}; */

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
