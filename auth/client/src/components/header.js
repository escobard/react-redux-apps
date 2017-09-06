import React, {Component} from 'react';

export default class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
			navItems: ['Sign In', 'Sign Out']
		}
	}
	renderNavItems(items){	
		return items.map((item, index) => {
			return(
				<li key={index} className="nav-item">
						{item}
				</li>
			)
		})
	}

	render(){
		return(
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					{this.renderNavItems(this.state.navItems)}
				</ul>
			</nav>
		);
	}
}