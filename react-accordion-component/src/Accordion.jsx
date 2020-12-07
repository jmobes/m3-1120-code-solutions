import React from 'react';

class Accordion extends React.Component {
  constructor() {
    super();
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
    let htmlClass = '';
    if (this.state.open && this.state.lastClicked === 'headerHTML') {
      htmlClass = 'info';
    } else {
      htmlClass = 'info hidden';
    }
    let cssClass = '';
    if (this.state.open && this.state.lastClicked === 'headerCSS') {
      cssClass = 'info';
    } else {
      cssClass = 'info hidden';
    }
    let jsClass = '';
    if (this.state.open && this.state.lastClicked === 'headerJS') {
      jsClass = 'info';
    } else {
      jsClass = 'info hidden';
    }

    return (
      <div className="accordion">
        <div className="html">
          <h2 className="headerHTML" onClick={this.handleClick}>Hypertext Markup Language</h2>
          <p className={htmlClass}>
            Hypertext Markup Language (HTML) is the standard markup language
            for creating web pages and web applications. With Cascading Style
            Sheets(CSS) and JavaScript, it forms a triad of cornerstone
            technologies for the World Wide Web.
          </p>
        </div>
        <div className="css">
          <h2 className="headerCSS" onClick={this.handleClick}>Cascading Style Sheets</h2>
          <p className={cssClass}>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup language
            like HTML. CSS is a cornerstone technology of the World Wide Web alongside
            HTML and JavaScript.
          </p>
        </div>
        <div className="js">
          <h2 className="headerJS" onClick={this.handleClick}>JavaScript</h2>
          <p className={jsClass}>
            JavaScript, often abbreviated JS, is a high-level, interpreted programming
            language that conforms to the ECMAScript specification. JavaScript has
            curly-bracket syntax, dynamic typing, prototype-based object-orientation and
            first-class functions.
          </p>
        </div>
      </div>
    );
  }
}

export default Accordion;
