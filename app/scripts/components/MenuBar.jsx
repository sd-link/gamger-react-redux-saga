import React from 'react';

import PropTypes from 'prop-types';
import config from 'config';



export default class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			fixed: false,
			menus: PropTypes.object.isRequired,
			footer: PropTypes.object.isRequired,
		});
		//this.toggle = this.toggle.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = e => {
		scroll = document.documentElement.scrollTop;
		this.setState({
			fixed: (scroll > 230) && (!this.props.footer)
		});

	}
  handleClick(item, target) {
    window.location = target;
  }


  render() {
		const rm = this;
		const { menus, footer } = this.props;
		var menu_css = this.state.fixed ? "app__menu fixed_top":"app__menu";
		var menu_type = menus.display;
		if (footer) {
			menu_type = "secondary";
			menu_css += " app__menu-footer"
		} 
		console.log(menu_type)
    return (
			<div className = {menu_css} >
				<ul className="app__menu-primary">
					{
						menus[menu_type].map((item, index) => (
							<li key={index} onClick={rm.handleClick.bind(null, item[1], item[0])}>{item[1]}</li>
						))
					}
				</ul>
			</div>
		)
	}
}
 
