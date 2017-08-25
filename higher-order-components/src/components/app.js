import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	{this.props.children}
      </div>
    );
  }
}

/* function mapStateToProps(state){
	return posts: state.posts;
}

this is a higher order component, since we are wrapping / composing it with helpers
export default connect(mapStateToProps)(App); */