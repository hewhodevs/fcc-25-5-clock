import React from "react";
import "./Clock.css"
import BreakLengthInput from "../BreakLengthInput/BreakLengthInput";
import Timer from "../Timer/Timer";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      isPlaying: false,
    }
  }

  render() {
    return(
      <div className="ClockTwentyFive">
        <h1>25 + 5 Clock</h1>
        <div className="ClockTwentyFive-innerContainer">
          <div className="ClockTwentyFive-inputs">
            <BreakLengthInput name="break" value={this.state.breakLength} />
            <BreakLengthInput name="session" value={this.state.sessionLength} />
          </div>
          <div className="Timer-container">
            <Timer timeLeft={this.state.timeLeft} isPlaying={this.state.isPlaying}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;