import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){

	class Authentication extends Component{
		static contextTypes = {
			router: React.PropTypes.object
		}
		checkAuth(){
			if (!this.props.auth) {
				this.context.router.push('/');
			}
		}

		componentDidMount(){
			this.checkAuth();
		}

		componentDidUpdate(){
			this.checkAuth();
		}

		render(){
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps ({auth}) {
		return {auth : auth.authenticated};
	}

	return connect(mapStateToProps)(Authentication);
}