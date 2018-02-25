import React from 'react';

import PropTypes from 'prop-types';
import config from 'config';



export default class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			fixed: true,
			menus: PropTypes.object.isRequired,
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
	
	const { menus } = this.props;
	const menu_css = this.state.fixed ? "app__menu fixed_top":"app__menu";
    return (
			<div className = {menu_css} >
				<ul className="app__menu-primary">
					{
						menus[menus.display].map((item, index) => (
							<li key={index}>{item[1]}</li>
						))
					}
				</ul>
			</div>
		)
	}
}
 
