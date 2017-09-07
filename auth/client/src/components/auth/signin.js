import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class SignIn extends Component{
	constructor(props) {
		super(props);
		this.state = {
			formLabels: ['email', 'password']
		}
	}
	renderInputs(inputs){
		return inputs.map((input, index) =>{
			return(

				<fieldset key={index} className="form-group">
					<label htmlFor="email">{input}</label>
					<input {...input} type="text" name={input} className="form-control"/>
				</fieldset>

			);
		})
	}
	handleFormSubmit({email, password}){
		console.log(email, password);
	}
	render(){
		// this handles reduxForm and grabs the props from our form higher order component
		const {handleSubmit, fields: {email, password }} = this.props;

		return(

			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				{this.renderInputs(this.state.formLabels)}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>

		);

	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(SignIn);