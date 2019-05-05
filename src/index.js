import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import TimerContainer from "./components/TimerContainer";

function App() {
  return (
    <div className="App">
      <TimerContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
