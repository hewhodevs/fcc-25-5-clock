import React from "react";
import "./Clock.css"
import BreakLengthInput from "../BreakLengthInput/BreakLengthInput";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeRemaining: "25:00"
    }
  }

  render() {
    return(
      <div className="ClockTwentyFive">
        <h1>25 + 5 Clock</h1>
        <div className="ClockTwentyFive-inputs">
          <BreakLengthInput name="break" value={this.state.breakLength} />
          <BreakLengthInput name="session" value={this.state.sessionLength} />
        </div>
        <div className="ClockTwentyFive-timerContainer">
          
        </div>
      </div>
    );
  }
}

export default Clock;