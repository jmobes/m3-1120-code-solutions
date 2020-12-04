import React from "react";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
      timer: 0,
      startTime: 0,
    }
    this.timer;
    this.handleClick = this.handleClick.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  startTime() {
    this.setState({
      running: true,
      timer: this.state.timer,
      startTime: Date.now() - this.state.timer
    });
    this.timer = setInterval(() => {
      this.setState({
        timer: Date.now() - this.state.startTime
      })
    }, 1000)
  };

  stopTime() {
    this.setState({running: false});
    clearInterval(this.timer);
  }

  resetTime() {
    this.stopTime();
    this.setState({
      timer: 0,
      startTime: 0,
    });
  }

  handleClick() {
    if(this.state.running) this.stopTime();
    else this.startTime();
  }

  render() {
    return (
      <div className="stopwatch">
        <div className="time__container">
          <p onClick={this.resetTime} className="stopwatch__time">{Math.floor(this.state.timer / 1000)}</p>
        </div>
        <div onClick={this.handleClick} className="stopwatch__icon">
          {this.state.running ? <PauseIcon style={{fontSize: 50}} /> : <PlayArrowIcon style={{fontSize: 50}} />}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
