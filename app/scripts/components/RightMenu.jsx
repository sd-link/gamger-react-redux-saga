import React from 'react';
import { logOut } from 'actions';
import { login } from 'actions';
import PropTypes from 'prop-types';
import config from 'config';
import Menu from 'components/sidemenu/Menu';
import Item from 'components/sidemenu/Item';
import Logo from 'components/Logo';
import SocialBar from 'components/SocialBar';
export default class RightMenu extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  
  handleClick(item) {
    switch (item) {
      case 0:
        this.props.dispatch(logOut());
        break;
      case 1:
        this.props.dispatch(login());
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
    const { dispatch, user } = this.props;
    return (
      <Menu showDividers={true} position='right'>
        <SocialBar/>
        {!user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 1)}><i className="i-sign-in" />LogIn</Item>}
        <Item onClick={this.handleClick.bind(null, 2)}>Discover</Item>
        <Item onClick={this.handleClick.bind(null, 3)}>Create</Item>
        <Item onClick={this.handleClick.bind(null, 4)}>Produce</Item>
        <Item onClick={this.handleClick.bind(null, 5)}>Explore</Item>
        <Item onClick={this.handleClick.bind(null, 6)}>Shop</Item>
        {user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 0)}>LogOut<i className="i-sign-out" /></Item>}
      </Menu>
    );
  }
}

 