import React from 'react';
import "./Timer.css";

class Timer extends React.Component {

  getMMSSFormat(totalSeconds) {
    let minutes = parseInt(totalSeconds / 60, 10);
    let seconds = parseInt(totalSeconds % 60, 10);
    if(minutes < 10) { minutes = "0" + minutes; }
    if(seconds < 10) { seconds = "0" + seconds; }
    return `${minutes}:${seconds}`;
  }

  render() {
    let playPauseText = (this.props.isPlaying) ? "Pause" : "Start";

    return(
      <div className="Timer">
        <h2 id="timer-label">Session</h2>
        <span id="time-left">{this.getMMSSFormat(this.props.timeLeft)}</span>
        <div>
          <button id="start_stop">{playPauseText}</button>
          <button id="reset">reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;