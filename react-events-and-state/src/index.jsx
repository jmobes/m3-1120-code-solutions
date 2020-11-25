import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor() {
    super();
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      this.state.isClicked ? <button>Thanks!</button> : <button onClick={this.handleClick}>Click Me!</button>
    );
  }
}

ReactDOM.render(<CustomButton />, document.getElementById('root'));
