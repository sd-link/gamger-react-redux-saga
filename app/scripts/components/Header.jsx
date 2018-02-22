import React from 'react';
import PropTypes from 'prop-types';

import { logOut } from 'actions';
import Logo from 'components/Logo';
import SocialBar from 'components/SocialBar';
import RightMenu from 'components/RightMenu';

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleClickLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  render() {
    return (
      <header className="app__header">
        <div className="app__container">
          
          <div className="app__container__logo">
            <Logo />
            <div className="logo-description">game changing television</div>
          </div>
          <SocialBar />  
          <div className="app__container__login">
            <a className="btn btn-primary btn-outline-primary" onClick={this.handleClickLogout}>
              <span>logout</span>
            </a>
          </div>
          <div className="app__header__menu">
            <RightMenu />
          </div>
        </div>
      </header>
    );
  }
}
