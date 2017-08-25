import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			links : [{name:'Home', path: '/'}, {name:'Resources', path: '/resources'}, {name:'Authentication'}]
		}
	}

	renderAuthButton(buttons){
		return(
			<div>
				{this.props.authentication
				? <button onClick={() => this.props.authenticate(false)}>Sign Out</button> 
				: <button onClick={() => this.props.authenticate(true)}>Sign In</button>}
			</div>

		);
		
	}

	renderNavItems(links){
		return links.map((link, index) =>{
			let {name, path} = link;
			if(!path) {return <li key={index} className="nav-item">{this.renderAuthButton(this.state.buttons)}</li>};
			return <li key={index} className="nav-item"><Link to={path}>{name}</Link></li>
			
		})
	}

	render(){
		return (
			<nav className='navbar navbar-light'>
				<ul className="nav navbar-nav">
					{this.renderNavItems(this.state.links)}
				</ul>
			</nav>
		);
	}
};

function mapStateToProps ({authentication}) {
	return {authentication};
}

export default connect(mapStateToProps, actions)(Header);