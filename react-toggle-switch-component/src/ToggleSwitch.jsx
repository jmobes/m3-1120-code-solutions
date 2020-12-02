import React from 'react';

class ToggleSwitch extends React.Component {
  constructor() {
    super();
    this.state = {
      on: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ on: !this.state.on });
  }

  render() {
    return (
      <div className="toggleSwitch__container">
        <div style={{ background: this.state.on ? 'green' : '#b5b4b4' }} onClick={this.handleClick} className="toggleSwitch__button">
          <div style={{ right: this.state.on ? '0' : 'unset', left: this.state.on ? 'unset' : '0' }} className="toggleSwitch__button__circle"></div>
        </div>
        <p className="toggleSwitch__text">{this.state.on ? 'ON' : 'OFF'}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
