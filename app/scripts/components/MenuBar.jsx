import React from 'react';
import { redirect } from 'actions';
import PropTypes from 'prop-types';
import config from 'config';
import { Link, withRouter } from 'react-router-dom'

export default class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			fixed: false,
			page: PropTypes.string.isRequired,
			menus: PropTypes.object.isRequired,
			footer: PropTypes.object.isRequired,
			dispatch: PropTypes.func.isRequired,
			user: PropTypes.object.isRequired,
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
		var scroll = document.documentElement.scrollTop;
		var top_height = this.props.user.isAuthenticated?100:230;
		this.setState({	
			fixed: (scroll > top_height) && (!this.props.footer)
		});

	}
  handleClick(item, page, menu_display) {
		this.props.dispatch(redirect(page, menu_display));
  }


  render() {
		const rm = this;
		const { page, menus, footer, dispatch , user } = this.props;
		var menu_css = this.state.fixed ? "app__menu fixed_top":"app__menu";
		var menu_type = menus.display;
		if (footer) {
			menu_type = "secondary";
			menu_css += " app__menu-footer"
		} 
    return (
			<div className = {menu_css} >
				<ul className="app__menu-primary">
					{
						menus[menu_type].map((item, index) => (
							<li key={index}  onClick={rm.handleClick.bind(this, item[1], item[0], item[2])}>
								<Link to={item[0]} className={item[0]=== page?'active':''}>
									{item[1]}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}
 
