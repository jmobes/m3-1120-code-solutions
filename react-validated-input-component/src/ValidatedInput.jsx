import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

class ValidatedInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      error: 'A password is required'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.validatePassword();
    });
  }

  validatePassword() {
    if (!this.state.value.length) {
      this.setState({ error: 'A password is required' });
    } else if (this.state.value.length < 8) {
      this.setState({ error: 'Your password must be at least 8 characters' });
    } else {
      this.setState({ error: '' });
    }
  }

  render() {
    return (
      <div className="container">
        <label className="password__label" htmlFor="password">Password</label>
        <div className="flex-ctn">
          <input value={this.state.value} onChange={this.handleChange} className="password" type="password" id="password" />
          {this.state.error ? <ClearIcon className="icon" style={{ fontSize: 30, color: 'red' }} /> : <CheckIcon className="icon" style={{ fontSize: 30, color: 'green' }} />}
        </div>
        {this.state.error ? <p className="message">{this.state.error}</p> : null}
      </div>
    );
  }
}

export default ValidatedInput;
