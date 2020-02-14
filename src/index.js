import React from "react";
import { render } from "react-dom";
import JokeGenerator from "./jokeGenerator";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <JokeGenerator />
  </div>
);

render(<App />, document.getElementById("root"));
