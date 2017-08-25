import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state ={
			links : ['Home', 'Resources', 'Authentication']
		}
	}
	renderAuthButton(){
		return(
			<div>
				{this.props.authentication
				? <button onClick={() => this.props.authenticate(false)}>Sign Out</button> 
				: <button onClick={() => this.props.authenticate(true)}>Sign In</button>}
			</div>

		);
		
	}

	renderNavItems(links){
		return links.map(link =>{
			switch(link){
				case('Authentication'):
					return <li key={link} className="nav-item">{this.renderAuthButton()}</li>;
				case('Resources'):
					return <li key={link} className="nav-item"><Link to='/resources'>{link}</Link></li>;
				default:
					return <li key={link} className="nav-item"><Link to='/'>{link}</Link></li>;
			}
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