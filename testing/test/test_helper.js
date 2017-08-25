// this sets up jQuery to work with the terminal to simulate a browser: github.com/tmpvar/jsdom
import jsdom from 'jsdom';

// sets up jQuery in a new variable, which is then defined as $ later on
import jQuery from 'jquery';
import React from 'react';

// utilizes dom elements from react-dom
import ReactDOM from 'react-dom';

// utilizes test utilities for react
import TestUtils from 'react-addons-test-utils';

// Mocha is responsible for running the tests, gives us the reports back, handles errors, loads our tests
// cleans them one by one, and cleans up after each one

// Chai is responsible for writing the tests, which contains a library of helpers to make assertions about specific properties
// of the subjects we are testing. Documentation here: chaijs.com/api/bbd

import chai, { expect } from 'chai';

// this library enhances the assertions of the chai library by utilizing jQuery
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// set up the testing environment to run like a browser in the command line
// global is the same as window within a node.js environment
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// this sets up the $ to utilize the window DOM variable as $ for jQuery
// so its ONLY responsible for the global.window that is used by the cmd
const $ = jQuery(global.window);

// passes the jQuery and chai utilities into chaiJquery.
chaiJquery(chai, chai.util, $);

// build `renderComponent` helper that should render a given react class
function renderComponent(ComponentClass, props = {}, state = {}) {
  
  // creates a component with a store
  const componentInstance =  

  // this line essentially renders the application into the HTML document
  // this does the exact same as ReactDOM.render, except within our global.window instances within the cmd
  TestUtils.renderIntoDocument(
    // this is necessary with react-redux, since we need to have a store for our data
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // this produces the HTML within our window which is utilized by the cmd, effectively rendering our testing components
  // the reason why we need to add jQuery here is to allow us to utilize the assertion elements of chaiJquery
  return $(ReactDOM.findDOMNode(componentInstance));
}

// this function creates a function with an argument that utilises an event handler and a value to simulate component events
$.fn.simulate = function(eventName, value) {
  if (value) {
    // the this handler here accesses the component added to the simulate function
    this.val(value);
  }

  // this is what simulates the change event handler with TestUtils
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
