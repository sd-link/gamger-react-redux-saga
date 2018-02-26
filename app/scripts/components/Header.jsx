import React from 'react';
import PropTypes from 'prop-types';

import { logOut } from 'actions';
import { login } from 'actions';
import Logo from 'components/Logo';
import SocialBar from 'components/SocialBar';
import RightMenu from 'components/RightMenu';

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    menus: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired,
  };

  handleClickLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  handleClickLogin = e => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(login());
  };

  render() {
    const { dispatch, user, menus, page } = this.props;
    return (
      <header className="app__header">
        <div className="app__container">
          
          <div className="app__container__logo">
            <Logo />
            <div className="logo-description">game changing television</div>
          </div>
          <SocialBar />  
          <div className="app__container__login">
            {user.isAuthenticated &&
              <a className="btn btn-primary btn-outline-primary" onClick={this.handleClickLogout}>
                <span>SignOut</span>
              </a>
            }
            {!user.isAuthenticated &&
              <a className="btn btn-primary btn-outline-primary" onClick={this.handleClickLogin}>
                <span>SignIn</span>
              </a>
            }      
          
          </div>
          <div className="app__header__menu">
            <RightMenu user={user} dispatch={dispatch} menus={menus} page={page}/>
          </div>
        </div>
      </header>
    );
  }
}
