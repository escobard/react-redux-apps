// set up the testing environment to run like a browser in the command line

// build render component helper that should render a given react class

// build helper for simulating events


// set up chai-jquery
import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
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
// TEST
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
