import React from 'react';
import PropTypes from 'prop-types';
import SignUpBar from 'components/SignUpBar';
import MenuBar from 'components/MenuBar';
import SocialBar from 'components/SocialBar';
export default class Footer extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    menus: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired,
  };

  render() {
    const { dispatch, user, menus, page } = this.props;
    return (
      <footer className="app__footer">
        {!user.isAuthenticated&&<SignUpBar request='true'/>}
        
        <MenuBar  page={page} menus={menus} footer={true} dispatch={dispatch} user={user} />
        <div className="app__container">
          <SocialBar/>
        </div>
      </footer>
    )
  }
}

 
