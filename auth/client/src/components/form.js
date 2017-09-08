import React, {Component} from 'react';

export default class Form extends Component{
	constructor(props) {
		super(props);
		this.state = {
			email :'',
			password :'',
			confirmpass: '',
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
		switch(id){
			case 'email':
				this.setState({email:value});
			case 'password':
				this.setState({password: value});
			case 'confirmpass':
				this.setState({confirmpass: value});
		}
	}
	handleFormSubmit(event){
		let {email, password} = this.state;
		event.preventDefault();
		this.props.handler(email, password);
	}
	handleFormError(error){
		return(
			<span className="error-message col-md-12">{error ? error : 'Please enter your login credentials'}</span>
		)

	}
	render(){
		let {error, formLabels} = this.props
		console.log(this.props);
		return(

			<form onSubmit={this.handleFormSubmit}>
				{this.renderInputs(formLabels)}
				{this.handleFormError(error)}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>

		);

	}
}