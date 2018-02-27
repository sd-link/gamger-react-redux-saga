import React from 'react';
import PropTypes from 'prop-types';

import config from 'config';

export default class SignUplBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			request: false,
		});
		//this.toggle = this.toggle.bind(this);
	}

	render(){
		const { request } = this.props;
		return (  
			<div className="app__signup-bar">
				<div className="r-size-h3 r-font-nexa r-mt-20 r-mb-20">
					Don't just watch, get involved!
				</div>
				<button className="btn btn-outline-secondary">Sign Up </button>
				{this.props.request&&<div className="r-size-h5">Request beta access today</div>}
			</div>
		)
	}
}
	
 
 

