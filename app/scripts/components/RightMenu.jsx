import React from 'react';
import { logOut } from 'actions';
import { login } from 'actions';
import { redirect } from 'actions';
import PropTypes from 'prop-types';
import config from 'config';
import Menu from 'components/sidemenu/Menu';
import Item from 'components/sidemenu/Item';
import Logo from 'components/Logo';
import SocialBar from 'components/SocialBar';
import { Link, withRouter } from 'react-router-dom'

export default class RightMenu extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    menus: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired,
  };
  
  //
  handleClick(item, page, menu_display) {
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
        this.props.dispatch(redirect(page, menu_display));
    }
  }
  render() {
    const rm = this;
    const { dispatch, user, menus, page } = this.props;
    return (
      <Menu showDividers={true} position='right'>
        <SocialBar/>
        {!user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 1, '', '')}><i className="i-sign-in" />SignIn</Item>}
        {!user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 2, '', '')}><i className="i-edit" />SignUp</Item>}
        {
          menus[menus.display].map((item, index) => (
            <Item key={index} onClick={rm.handleClick.bind(this, item[1], item[0], item[2] )}>
              <Link to={item[0]} className={item[0]=== page?'active':''}>
                {item[1]}
              </Link>            
            </Item>
          ))
        }
        {user.isAuthenticated && <Item onClick={this.handleClick.bind(this, 0, '', '')}>SignOut<i className="i-sign-out" /></Item>}
      </Menu>
    );
  }
}

 