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
    this.setBreakLength = this.setBreakLength.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);
    this.reset = this.reset.bind(this);
  }

  setBreakLength(length) {
    this.setState({breakLength: length});
  }
  
  setSessionLength(length) {
    this.setState({
      sessionLength: length,
      timeLeft: length * 60
    });
  }

  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      isPlaying: false,
    });
  }


  render() {
    return(
      <div className="ClockTwentyFive">
        <h1>25 + 5 Clock</h1>
        <div className="ClockTwentyFive-innerContainer">
          <div className="ClockTwentyFive-inputs">
            <BreakLengthInput 
              name="break" 
              value={this.state.breakLength} 
              setLength={this.setBreakLength}
            />
            <BreakLengthInput 
              name="session" 
              value={this.state.sessionLength} 
              setLength={this.setSessionLength}
            />
          </div>
          <div className="Timer-container">
            <Timer 
              timeLeft={this.state.timeLeft} 
              isPlaying={this.state.isPlaying} 
              reset={this.reset}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;