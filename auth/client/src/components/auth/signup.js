import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Components{
	render(){
		return(
			<div>

				<h2>Signup</h2>

			</div>
		)	
	}
}

export default connect()(SignUp);