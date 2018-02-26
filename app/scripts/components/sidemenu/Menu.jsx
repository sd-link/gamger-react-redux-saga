import React from 'react';
import PropTypes from 'prop-types';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			visible: true
		});
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			visible: !this.state.visible
		});
	}
	position() {
		var pos = this.props.position;
		switch (pos) {
			case 'left':
			case 'right':
				return pos;
			default:
				return 'right';
		}
	}
	buttonStyles() {
		var styles = {};
		styles[this.position()] = 0;
		return styles;
	}
	wrapperStyles() {
		var width = this.props.width || 250;
		var styles = {
			width: width
		};
		var position = this.position();
		var capitalized = position.substr(0, 1).toUpperCase() + position.substr(1);
		styles['margin' + capitalized] = '-' + width;
		styles[position] = (this.state.visible ? -1 * width : 0);
		return styles;
	}
	render() {
		return (
			<div>
				<a style={this.buttonStyles()} onClick={this.toggle} className="button-open toggle impromptu-toggle-open">
					<span>Menu</span><i className="i-bars"></i>
				</a>
				<nav style={this.wrapperStyles()} className='impromptu-menu-wrapper'>
					<ul className={'sidebar-nav' + (this.props.showDividers ? ' impromptu-divider' : '')} style={{width: this.props.width || 250}}>
						<a onClick={this.toggle} className="button-close pull-right toggle">
							<span>Menu</span><i className="i-times"></i>
						</a>
						{
							React.Children.map(this.props.children, function(item) {
								if (item === null) return null;
								var onClick = function() {
									if ('function' === typeof item.props.onClick)
										item.props.onClick();
									if (true === this.props.autoClose)
										this.toggle();
								};
								if (item.type.displayName === "SocialBar") {
									return (
										<li className="sidebar-brand">
											{item}
										</li>
									);
								} else if (item.type.displayName === "Item" || item.type.name === "Item") {
									return (
										<li className="sidebar-item" onClick={onClick.bind(this)}>
											<span>{item.props.children}</span>
										</li>
									);
								} else {
									return (
										<li>
											{item}
										</li>
									)
								}
							}.bind(this))
						}
					</ul>
				</nav>
			</div>
		);
	}
}; 

