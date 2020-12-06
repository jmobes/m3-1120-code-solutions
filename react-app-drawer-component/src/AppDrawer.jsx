import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

class AppDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const menu =
      <div className="menu">
        <h2 className="menu__text">Menu</h2>
        <ul onClick={this.handleClick} className="menu__link">
          <li className="menu__link--item">About</li>
          <li className="menu__link--item">Get Started</li>
          <li className="menu__link--item">Sign In</li>
        </ul>
      </div>;

    return (
      <div className={this.state.open ? 'container active' : 'container'}>
        {this.state.open ? menu : <MenuIcon className="menu-hamburger" onClick={this.handleClick} style={{ fontSize: 30 }} />}
        <div className="content" onClick={this.handleClick}>
          <h1 className="content--text">App Drawer</h1>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
