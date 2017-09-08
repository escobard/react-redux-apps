import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component{
	constructor(props) {
		super(props);
		this.state = {
			formLabels: ['email', 'password'],
			email :'',
			password :''
		}

    	this.handleCredential= this.handleCredential.bind(this);
    	this.handleFormSubmit= this.handleFormSubmit.bind(this);
    	this.renderInputs = this.renderInputs.bind(this);
	}
	renderInputs(inputs){
		return inputs.map((input, index) =>{
			return(

				<fieldset key={index} className="form-group">
					<label htmlFor={input}>{input}</label>
					<input value={this.state[input]} onChange={this.handleCredential} 
					type={input =='password'? 'password': 'text'} name={input} id={input} className="form-control"/>
				</fieldset>

			);
		})
	}
	handleCredential(event){
		let {id, value} = event.target;
		id == 'email' 
		? this.setState({email:value}) 
		: this.setState({password: value});
	}
	handleFormSubmit(event){
		let {email, password} = this.state;
		event.preventDefault();
		this.props.signinUser(email, password);
	}
	handleFormError(error){
		return(
			<span className="error-message col-md-12">{error ? error : 'Please enter your login credentials'}</span>
		)

	}
	render(){

		return(

			<form onSubmit={this.handleFormSubmit}>
				{this.renderInputs(this.state.formLabels)}
				{this.handleFormError(this.props.error)}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>

		);

	}
}

function mapStateToProps({auth}){
	return {error: auth.error};
}

export default connect(mapStateToProps, actions)(SignIn);