import React, {Component} from 'react';

export default class Form extends Component{

	constructor(props) {
		super(props);
		this.state = {
			email :'',
			password :'',
			confirmpass: ''
		}

    	this.handleCredential= this.handleCredential.bind(this);
    	this.handleFormSubmit= this.handleFormSubmit.bind(this);
    	this.renderInputs = this.renderInputs.bind(this);
	}

	handleCredential(event){
		let {id, value} = event.target;
		switch(id){
			case 'email':
				return this.setState({email:value});
			case 'password':
				return this.setState({password: value});
			case 'confirmpass':
				return this.setState({confirmpass: value});
		}
	}

	handleFormSubmit(event){
		event.preventDefault();
		let {email, password, confirmpass} = this.state;
		this.props.handler(email, password);
	}

	handleFormError(error){
		const errors = [];
		let {email, password, confirmpass} = this.state;
		let {formLabels, variant} = this.props;

		error ? errors.push(error): null;
		let passError = variant ? password !== confirmpass ? errors.push('Make sure your passwords match'): null : null;
		let emptyFields = formLabels.map((label, index) =>{
			if (this.state[label] == '') {
				errors.push(`${label} must be filled`);
			}
		});
		
		return(
			<span className="error-message error col-md-12">{ errors.join(', ') }</span>
		)

	}

	renderInputs(inputs){
		return inputs.map((input, index) =>{
			return(

				<fieldset key={index} className="form-group">
					<label htmlFor={input}>{input}</label>
					<input value={this.state[input]} onChange={this.handleCredential} 
					type={input =='password' || input == 'confirmpass' ? 'password': 'text'} name={input} id={input} className="form-control"/>
				</fieldset>

			);
		})
	}

	render(){
		let {error, formLabels, variant} = this.props
		let buttonText = variant ? 'Sign Up' : 'Sign In'
		return(

			<form onSubmit={this.handleFormSubmit}>
				{this.renderInputs(formLabels)}
				{this.handleFormError(error)}
				<button action="submit" className="btn btn-primary">{buttonText}</button>
			</form>

		);

	}
}