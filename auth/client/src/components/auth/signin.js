// this should be refactored to a container, but let's leave this as is for now

import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import Form from '../form';


class SignIn extends Component{
	render(){

		return <Form formLabels={['email', 'password']} error={this.props.error} handler={this.props.signinUser}/>;

	}
}

function mapStateToProps({auth}){
	return {error: auth.error};
}

export default connect(mapStateToProps, actions)(SignIn);