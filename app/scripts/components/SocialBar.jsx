import React from 'react';
import PropTypes from 'prop-types';

import config from 'config';

const SocialBar=() => (
  <div className="app__socialbar">
		<a href="#">
			<i className="i-facebook" />
		</a>
		<a href="#">
			<i className="i-twitter" />
		</a>
		<a href="#"> 
			<i className="i-instagram" />
		</a>		
		<a href="#">
			<i className="i-linkedin" />
		</a>
  </div>
);
 
export default SocialBar;
  