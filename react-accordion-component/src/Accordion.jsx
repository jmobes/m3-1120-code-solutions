import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      lastClicked: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className === this.state.lastClicked) {
      this.setState({ open: !this.state.open });
    } else {
      this.setState({
        open: true,
        lastClicked: event.target.className
      });
    }
  }

  render() {
    const topics = this.props.topics;
    return (
      <div className="accordion">
        {topics.map(topic => {
          return (
            <div className={topic.class.main} key={topic.id}>
              <h2 className={topic.class.header} onClick={this.handleClick}>{topic.title}</h2>
              <p className={this.state.open && this.state.lastClicked === topic.class.header ? 'info' : 'info hidden'}>{topic.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Accordion;
