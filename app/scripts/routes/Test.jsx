import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import config from 'config';

import Logo from 'components/Logo';

export class Test extends React.PureComponent {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      user: PropTypes.object.isRequired,
    };
  
 
    render() {
      const { user } = this.props;
  
      return (
        <div key="Discover" className="app__home app__route">
          <div className="app__container">
            Discover
  
   
          </div>
        </div>
      );
    }
  }
  
  /* istanbul ignore next */
  function mapStateToProps(state) {
    return { user: state.user };
  }
  
  export default connect(mapStateToProps)(Test);
  