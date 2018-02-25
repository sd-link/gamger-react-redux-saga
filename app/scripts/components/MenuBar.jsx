import React from 'react';

import PropTypes from 'prop-types';
import config from 'config';



export default class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			fixed: true
		});
		//this.toggle = this.toggle.bind(this);
	}
	
	componentDidMount() {
		//console.log("sdklfjslkdfjsdflkjflsd")
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
			window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = e => {
		scroll = document.documentElement.scrollTop;
		this.setState({
			fixed: scroll > 200
		});

	}
  render() {
		const menu_css = this.state.fixed ? "app__menu fixed_top":"app__menu";
    return (
			<div className = {menu_css} >
				<ul className="app__menu-primary">
					<li>
						Discover.
					</li>
					<li>
						Create.
					</li>
					<li>
						produce.
					</li>
					<li>
						Explore.
					</li>
					<li>
						Shop.
					</li>
				</ul>
			</div>
		)
	}
}
 
