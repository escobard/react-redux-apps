import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class Users extends Component {

	componentWillMount(){
		this.props.fetchUsers();
	}

	renderUser(users){
		return users.map((user, index) =>{
			let {name, website} = user;
			let company = user.company.name;
			return (
				<div key={index} className="card card-block col-md-3 col-sm-12">
					<h4 className="card-title">{name}</h4>
					<p className="card-text">{company}</p>
					<a className="btn btn-primary" href={website}>{website}</a>
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