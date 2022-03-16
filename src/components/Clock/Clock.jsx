import React from "react";
import "./Clock.css"
import LengthControl from "../LengthControl/LengthControl";
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
    this.setTimeLeft = this.setTimeLeft.bind(this);
    this.setIsPlaying = this.setIsPlaying.bind(this);
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

  setTimeLeft(seconds) {
    this.setState({timeLeft: seconds});
  }

  setIsPlaying(bool) {
    this.setState({isPlaying: bool});
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
            <LengthControl 
              name="break" 
              value={this.state.breakLength} 
              setLength={this.setBreakLength}
            />
            <LengthControl 
              name="session" 
              value={this.state.sessionLength} 
              setLength={this.setSessionLength}
            />
          </div>
          <div className="Timer-container">
            <Timer 
              timeLeft={this.state.timeLeft} 
              isPlaying={this.state.isPlaying} 
              setTimeLeft={this.setTimeLeft}
              setIsPlaying={this.setIsPlaying}
              reset={this.reset}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;