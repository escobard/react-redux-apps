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
					<input value={this.state[input]} onChange={this.handleCredential} type="text" name={input} id={input} className="form-control"/>
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
	render(){

		return(

			<form onSubmit={this.handleFormSubmit}>
				{this.renderInputs(this.state.formLabels)}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>

		);

	}
}

export default connect(null, actions)(SignIn);