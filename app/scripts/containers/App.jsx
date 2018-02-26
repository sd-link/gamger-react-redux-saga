import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Helmet from 'react-helmet';
import cx from 'classnames';
import history from 'modules/history';
import RoutePublic from 'modules/RoutePublic';
import RoutePrivate from 'modules/RoutePrivate';

import config from 'config';
import { showAlert } from 'actions';

import Home from 'routes/Home';
import Test from 'routes/Test';

import Private from 'routes/Private';
import NotFound from 'routes/NotFound';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpBar from 'components/SignUpBar';
import MenuBar from 'components/MenuBar';
import SystemAlerts from 'components/SystemAlerts';

export class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch, user } = this.props;
    const { user: nextUser } = nextProps;

    /* istanbul ignore else */
    if (!user.isAuthenticated && nextUser.isAuthenticated) {
      dispatch(showAlert('Hello! And welcome!', { type: 'success', icon: 'i-trophy' }));
    }
  }


  render() {
    const { app, dispatch, user } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div
          className={cx('app', {
            'app--private': user.isAuthenticated,
          })}
        >
          <Helmet
            defer={false}
            htmlAttributes={{ lang: 'pt-br' }}
            encodeSpecialCharacters={true}
            defaultTitle={config.title}
            titleTemplate={`%s | ${config.name}`}
            titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
          />
          <Header dispatch={dispatch} user={user} menus={app.menus} page={app.page}/>

          <main className="app__main">          
          {!user.isAuthenticated&&<SignUpBar/>}
            <MenuBar page={app.page} menus={app.menus} footer={false} dispatch={dispatch} user={user} />
            <Switch>
              <RoutePublic isAuthenticated={user.isAuthenticated} path="/" exact component={Home} component_name={app.page} />
              <RoutePublic isAuthenticated={user.isAuthenticated} path="/test" component={Test} component_name={app.test} />
              <RoutePrivate isAuthenticated={user.isAuthenticated} path="/private" component={Private} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer dispatch={dispatch} user={user} menus={app.menus} page={app.page} />
          <SystemAlerts alerts={app.alerts} dispatch={dispatch} />
        </div>
      </ConnectedRouter>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
