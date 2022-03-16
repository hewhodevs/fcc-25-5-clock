import React from 'react';
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
  }

  startStop() {
    const isPlaying = this.props.isPlaying;
    // toggle play pause status
    this.props.setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // start the timer if it was not already running
      this.start();
    } else {
      // else pause / stop clock if it was running
      this.stop();
    }
  }

  start() {
    this.timer();
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.stop();
    this.props.reset();
  }

  timer() {
    const timeLeft = this.props.timeLeft
    if(timeLeft > 0) {
      this.interval = setInterval(() => {
        this.props.setTimeLeft(this.props.timeLeft - 1);
      }, 1000);
    }
  }

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
          <button id="start_stop" onClick={this.startStop}>{playPauseText}</button>
          <button id="reset" onClick={this.reset} >reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;