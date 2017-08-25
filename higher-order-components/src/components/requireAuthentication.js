import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){

	class Authentication extends Component{

		// this allows us to get access to our context
		// the static keyword is defining a property of the Authentication class
		static contextTypes = {

			// this says that we need to get access to a router property
			router: React.PropTypes.object
		}

		checkAuth(){
			if (!this.props.authentication) {
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

	function mapStateToProps ({authentication}) {
		return {authentication};
	}

	return connect(mapStateToProps)(Authentication);
}

/* 

TO use this HOC

import Authentication // this is the HOC
import Resources // this is the component I want to wrap

const ComposedComponent = Authentication(Resources);

to utilize the composed component within a render method:

<ComposedComponent resources={resourceList}/>

IMPORTANT: A HIGHER ORDER COMPONENT IS A FUNCTION THAT IS CALLED WITHIN AN EXSISTING COMPONENT 

The {...this.props} line passes props from the child component (in this case Resources) via the ComposedComponent function

*/