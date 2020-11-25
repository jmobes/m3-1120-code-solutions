import React from 'react';

class HotButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      backgroundColor: null,
      fontColor: '#000'
    };
    this.colors = ['rgb(64,0,119)', 'rgb(114,62,169)', 'rgb(243,86,92)', 'rgb(255,177,96)', 'rgb(248,255,0)', 'rgb(255,255,255)'];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 }, () => {
      if (this.state.count > 18) {
        this.setState({ backgroundColor: '#fff' });
      }
      if (this.state.count && this.state.count % 3 === 0) {
        this.setState({ backgroundColor: this.colors[this.state.count / 3 - 1] });
      }
      if (this.state.count >= 3 && this.state.count < 12) {
        this.setState({ fontColor: '#fff' });
      } else {
        this.setState({ fontColor: '#000' });
      }
    });
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" style={{ backgroundColor: this.state.backgroundColor, color: this.state.fontColor }} onClick={this.handleClick}>Hot Button</button>
        <p className="count">Click Count: {this.state.count}</p>
      </div>
    );
  }
}

export default HotButton;
