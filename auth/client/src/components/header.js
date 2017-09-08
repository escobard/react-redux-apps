import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
			navItems: [ 'signin', 'signout', 'signup']
		}
	}
	renderNavItems(items, auth){	
		return items.map((item, index) => {
			if (auth.authenticated && item == 'signin' || auth.authenticated && item == 'signup' || !auth.authenticated && item == 'signout') {
				return;
			}
			return(
				<li key={index} className="nav-item">
							<Link to={`/${item}`}>{item}</Link>						
				</li>
			)
		})
	}

	render(){
		return(
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					{this.renderNavItems(this.state.navItems, this.props.auth)}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps({auth}){
	return {auth};
}

export default(connect(mapStateToProps)(Header));