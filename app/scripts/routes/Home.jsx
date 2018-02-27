import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import config from 'config';

import Logo from 'components/Logo';
import { login } from 'actions/index';

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClickLogin = (e) => {
    e.preventDefault();

    this.props.dispatch(login());
  };

  render() {
    const { user } = this.props;

    return (
      <div key="Home" className="app__home app__route">
        <div className="app__container">
          <div className="banner-container">
            <img src={require(`assets/media/banner/banner0.png`)} />
          </div>
          <div className="banner-container">
            <img src={require(`assets/media/banner/banner1.png`)} />
          </div>
          <div className="banner-container">
            <img src={require(`assets/media/banner/banner2.png`)} />
          </div>
          <div className="banner-container">
            <img src={require(`assets/media/banner/banner3.png`)} />
          </div>
          <div className="r-mt-30">
            <img src={require(`assets/media/banner/banner4.png`)} />
          </div>
          <div className="r-mt-50 r-flex r-flex-center r-flex-rows">
            <div className="r-size-h3 r-font-nexa r-align-center">
              TV AS IT SHOULD BE,
            </div>
            <div className="r-size-h1 r-font-nexa r-color-primary r-align-center">
              FREE!!! 
            </div>
            <div className="r-mt-30 r-mb-20 r-size-h4 r-font-nexa r-align-center">
              EXPLORE OUR NETWORK AND BINGE FOR A GOOD CAUSE.
            </div>  



          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
