import React from "react";
import "./Clock.css"
import BreakLengthInput from "../BreakLengthInput/BreakLengthInput";
import Timer from "../Timer/Timer";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 10,
      sessionLength: 30,
      timeLeft: 3600,
      isPlaying: false,
    }
    this.incrementBreakLength = this.incrementBreakLength.bind(this);
    this.decrementBreakLength = this.decrementBreakLength.bind(this);
    this.incrementSessionLength = this.incrementSessionLength.bind(this);
    this.decrementSessionLength = this.decrementSessionLength.bind(this);
    this.reset = this.reset.bind(this);
  }

  incrementBreakLength() {
    if(this.state.breakLength < 60) {
      this.setState((prevState) => ({
        breakLength: prevState.breakLength + 1
      }));
    }
  }

  decrementBreakLength() {
    if(this.state.breakLength > 1) {
      this.setState((prevState) => ({
        breakLength: prevState.breakLength - 1
      }));
    }
  }

  incrementSessionLength() {
    if(this.state.sessionLength < 60) {
      this.setState((prevState) => ({
        sessionLength: prevState.sessionLength + 1
      }));
    }
  }

  decrementSessionLength() {
    if(this.state.sessionLength > 1) {
      this.setState((prevState) => ({
        sessionLength: prevState.sessionLength - 1
      }));
    }
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
              incrementLength={this.incrementBreakLength}
              decrementLength={this.decrementBreakLength} 
            />
            <BreakLengthInput 
              name="session" 
              value={this.state.sessionLength} 
              incrementLength={this.incrementSessionLength}
              decrementLength={this.decrementSessionLength}
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