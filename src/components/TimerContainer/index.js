import React, { Component } from "react";
import Timer from "../Timer";

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockRunning: false
    };

    this.startClock = this.startClock.bind(this);
  }

  startClock(event) {
    this.setState({ clockRunning: true });
  }

  render() {
    return (
      <div>
        <Timer />
      </div>
    );
  }
}

export default TimerContainer;
