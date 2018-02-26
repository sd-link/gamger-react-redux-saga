import React from 'react';

import Github from 'containers/GitHub';

export default class Private extends React.PureComponent {
  render() {
    return (
      <div key="Private" className="app__private app__route">
        <div className="app__container">
          <div className="app__private__header">
            <h1>Welcome!</h1>
          </div>
          <div className="app__private__content">
            <div className="app__private__intro">
              <small className="text-muted"><i>Comming soon...</i></small>
            </div>
            {/* <Github /> */}
          </div>
        </div>
      </div>
    );
  }
}
