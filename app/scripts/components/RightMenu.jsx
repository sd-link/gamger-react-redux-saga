import React from 'react';
import config from 'config';
import Menu from 'components/sidemenu/Menu';
import Item from 'components/sidemenu/Item';
import Brand from 'components/sidemenu/Brand';
import Logo from 'components/Logo';
export default class RightMenu extends React.Component {
  handleClick(item) {
    switch (item) {
      case 1:
        window.location.hash = 'aaaaa';
        break;
      case 2:
        window.location.hash = 'bbbbb';
        break;
      case 3:
        window.location.hash = 'ccccc';
        break;
      case 4:
        window.location.hash = 'ddddd';
        break;
      default:
        window.location.hash = '';
    }
  }
  render() {
    return (
      <Menu showDividers={true} position='right'>
        <Brand><a href="#"><Logo/></a></Brand>
        <Item onClick={this.handleClick.bind(null, 6)}><i className="i-sign-in" />LogIn</Item>
        <Item onClick={this.handleClick.bind(null, 1)}>Discover</Item>
        <Item onClick={this.handleClick.bind(null, 2)}>Create</Item>
        <Item onClick={this.handleClick.bind(null, 3)}>Produce</Item>
        <Item onClick={this.handleClick.bind(null, 4)}>Explore</Item>
        <Item onClick={this.handleClick.bind(null, 5)}>Shop</Item>
        <Item onClick={this.handleClick.bind(null, 6)}>LogOut<i className="i-sign-out" /></Item>
      </Menu>
    );
  }
}

 