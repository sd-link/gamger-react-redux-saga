import React from 'react';
import config from 'config';
import Menu from 'components/sidemenu/Menu';
import Item from 'components/sidemenu/Item';
import Brand from 'components/sidemenu/Brand';

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
      <Menu showDividers={false} position='right'>
        <Brand><a href="#">Right menu</a></Brand>
        <Item onClick={this.handleClick.bind(null, 1)}>Installation</Item>
        <Item onClick={this.handleClick.bind(null, 2)}>How to use</Item>
        <Item onClick={this.handleClick.bind(null, 3)}>Props</Item>
        <Item onClick={this.handleClick.bind(null, 4)}>CSS</Item>
        <Item onClick={this.handleClick.bind(null, 5)}>Contribute</Item>
      </Menu>
    );
  }
}

 