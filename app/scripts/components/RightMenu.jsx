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
    menus: PropTypes.object.isRequired,
  };
  
  //
  handleClick(item, target) {
    switch (item) {
      case 0:
        this.props.dispatch(logOut());
        break;
      case 1:
        this.props.dispatch(login());
        break;
      case 2:
        window.location.hash = 'login';
        break;
      default:
        window.location.hash = target;
    }
  }
  render() {
    const rm = this;
    const { dispatch, user, menus } = this.props;
    return (
      <Menu showDividers={true} position='right'>
        <SocialBar/>
        {!user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 1, '')}><i className="i-sign-in" />SignIn</Item>}
        {!user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 2, '')}><i className="i-edit" />SignUp</Item>}
        {
          menus[menus.display].map((item, index) => (
            <Item key={index} onClick={rm.handleClick.bind(null, item[1], item[0] )}>{item[1]}</Item>
          ))
        }
        {user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 0, '')}>SignOut<i className="i-sign-out" /></Item>}
      </Menu>
    );
  }
}

 