import React from 'react';
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.startStop = this.startStop.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.playBeep = this.playBeep.bind(this);
    this.getMMSSFormat = this.getMMSSFormat.bind(this);
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
    this.interval = setInterval(this.updateTimer, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.stop();
    this.resetBeep();
    this.props.reset();
  }

  updateTimer() {
    if(this.props.timeLeft < 1) {
      this.props.toggleIsBreak();
      this.playBeep();
    } else {
      this.props.setTimeLeft(this.props.timeLeft - 1);
    }
  }

  playBeep() {
    const audio = document.getElementById("beep");
    audio.play();
  }

  resetBeep() {
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
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
        <h2 id="timer-label">{this.props.label}</h2>
        <span id="time-left">{this.getMMSSFormat(this.props.timeLeft)}</span>
        <div>
          <button id="start_stop" onClick={this.startStop}>{playPauseText}</button>
          <button id="reset" onClick={this.reset} >reset</button>
          <audio id="beep">
            <source src="https://github.com/hewhodevs/fcc-25-5-clock/raw/main/src/audio/notification.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  }
}

export default Timer;