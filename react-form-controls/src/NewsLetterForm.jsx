import React from 'react';

class NewsLetterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          EMAIL:
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button>SIGN UP</button>
      </form>
    );
  }
}

export default NewsLetterForm;
