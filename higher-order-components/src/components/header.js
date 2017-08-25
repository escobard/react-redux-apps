import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state ={
			links : ['Home', 'Resources', 'Authentication']
		}
	}
	renderAuthButton(){
		return <button>Sign In</button>
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

export default Header;