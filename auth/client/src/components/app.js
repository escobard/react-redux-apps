import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<h2>Redux Authentication</h2>
      		<Header/>
      		{this.props.children}
        </div>
    );
  }
}
