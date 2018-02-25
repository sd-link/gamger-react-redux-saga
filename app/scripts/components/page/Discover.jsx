import React from 'react';
import PropTypes from 'prop-types';


export default class Footer extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    menus: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, user, menus } = this.props;
    return (
        <div>
            Discover
        </div>
    )
  }
}

 
