import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
	componentWillMount(){
		this.props.fetchMessage();
	}
	render(){
		return(

			<div>

				<h2>Super secret feature</h2>
				<div>
					<h3> This is the data being fetched from the API once the user is authenticated:</h3>
					<p>{this.props.data}</p>
				</div>
			</div>

		)

	}
}

function mapStateToProps({data}){
	return {data : data.data}
}

export default connect(mapStateToProps, actions)(Feature);