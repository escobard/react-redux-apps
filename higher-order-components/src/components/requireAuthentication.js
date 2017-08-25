import React, { Component } from 'react';

export default function(ComposedComponent){

	class Authentication extends Component{
		render(){
			return <ComposedComponent {..this.props} />
		}
	}

	return Authentication;
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