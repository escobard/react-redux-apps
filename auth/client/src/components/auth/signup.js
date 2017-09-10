import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import Form from '../form';


class SignUp extends Component{
	render(){

		return <Form formLabels={['email', 'password', 'confirmpass']} error={this.props.error} 
		variant={'signUp'} handler={this.props.signupUser}/>;

	}
}

function mapStateToProps({auth}){
	return {error: auth.error};
}

export default connect(mapStateToProps, actions)(SignUp); 