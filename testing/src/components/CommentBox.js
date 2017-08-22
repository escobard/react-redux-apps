import React, { Component } from 'react';
import { connect } from 'react-redux';

// this is a fantastic way to pass multiple actions into each container without calling all of them at once
// should probably add this as part of my review notes
import * as actions from '../actions'

class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = { 
			comment: '' 
		}
	}

	handleChange(event){
		this.setState({ comment: event.target.value });
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
				<textarea 
				 value={this.state.comment}
				 onChange={this.handleChange.bind(this)} 
				 name="" 
				 id="" 
				 cols="30" 
				 rows="10"> 	
				</textarea>
				<button action="submit">
				 Submit Comment
				</button>
			</form>
		);
	}
}

export default connect(null, actions)(CommentBox);