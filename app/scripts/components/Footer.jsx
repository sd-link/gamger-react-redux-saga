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
  };

  render() {
    const { dispatch, user, menus } = this.props;
    return (
      <footer className="app__footer">
        <SignUpBar/>
        <MenuBar menus={menus} footer={true} dispatch={dispatch} />
        <div className="app__container">
          <SocialBar/>
        </div>
      </footer>
    )
  }
}

 
