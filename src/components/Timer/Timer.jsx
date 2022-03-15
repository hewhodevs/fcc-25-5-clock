import React from 'react';
import "./Timer.css";

class Timer extends React.Component {
  render() {
    let playPauseText = (this.props.isPlaying) ? "Pause" : "Start";

    return(
      <div className="Timer">
        <h2 id="timer-label">Session</h2>
        <span id="time-left">{this.props.timeLeft}</span>
        <div>
          <button id="start_stop">{playPauseText}</button>
          <button id="reset">reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;