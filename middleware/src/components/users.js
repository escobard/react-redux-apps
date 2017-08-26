import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class Users extends Component {

	componentWillMount(){
		this.props.fetchUsers();
	}

	renderUser(users){
		return users.map((user, index) =>{
			let {name} = user;
			return (
				<div key={index} className="card card-block">
					<h4 className="card-title">{name}</h4>
					<p className="card-text">Cheese Factory</p>
					<a className="btn btn-primary">Email</a>
				</div>

			);

		})
	}
	render(){
		return(

			<div className="users">
				{this.renderUser(this.props.users)}
			</div>

		)
	}
}

function mapStateToProps({users}){
	return {users}
}

export default connect(mapStateToProps, actions)(Users);