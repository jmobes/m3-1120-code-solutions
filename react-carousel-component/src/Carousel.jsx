import React from 'react';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.cycleImages();
    this.timer = null;
  }

  cycleImages() {
    this.timer = setInterval(() => {
      if (this.state.index === 4) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }, 3000);
  }

  handleClick(event) {
    const id = event.target.id;
    if (id === 'l-arrow') {
      if (this.state.index === 0) {
        this.setState({ index: 4 });
      } else {
        this.setState({ index: this.state.index - 1 });
      }
    }
    if (id === 'r-arrow') {
      if (this.state.index === 4) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }
    if (id === 'dot1') {
      this.setState({ index: 0 });
    }
    if (id === 'dot2') {
      this.setState({ index: 1 });
    }
    if (id === 'dot3') {
      this.setState({ index: 2 });
    }
    if (id === 'dot4') {
      this.setState({ index: 3 });
    }
    if (id === 'dot5') {
      this.setState({ index: 4 });
    }
  }

  render() {
    return (
      <div className="carousel">
        <ChevronLeftIcon
          className="arrow__left"
          id="l-arrow"
          onClick={this.handleClick}
          style={{ fontSize: 40 }} />
        <img src={this.props.images[this.state.index].url} />
        <ChevronRightIcon
          className="arrow__right"
          id="r-arrow"
          onClick={this.handleClick}
          style={{ fontSize: 40 }} />
        <div className="dot__container">
          <span
            className={`dot ${this.state.index === 0 ? 'active' : ''}`}
            id="dot1"
            onClick={this.handleClick}>
          </span>
          <span
            className={`dot ${this.state.index === 1 ? 'active' : ''}`}
            id="dot2"
            onClick={this.handleClick}>
          </span>
          <span
            className={`dot ${this.state.index === 2 ? 'active' : ''}`}
            id="dot3"
            onClick={this.handleClick}>
          </span>
          <span
            className={`dot ${this.state.index === 3 ? 'active' : ''}`}
            id="dot4"
            onClick={this.handleClick}>
          </span>
          <span
            className={`dot ${this.state.index === 4 ? 'active' : ''}`}
            id="dot5"
            onClick={this.handleClick}>
          </span>
        </div>
      </div>
    );
  }
}

export default Carousel;
