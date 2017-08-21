import React, { Component } from 'react';
import {connect} from 'react-redux';

const CommentList = (props) => {
	const { comments } = props;
	const list = comments.map(comment => <li key={comment}>{comment}</li>);

	return(

		<ul className="comment-list">{list}</ul>

	);
}

function mapStateToProps({comments}) {
	return { comments };
}

export default connect(mapStateToProps)(CommentList);