import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/CommentList';
import React from 'react'
import renderer from 'react-test-renderer';

describe('Tests CommentList component', () => {

	let component;
	
	// its really important to note that most HTML DOM or REeact element testing can be far better and more easily achieved with jest / enzyme
	beforeEach(() =>{
		const props = { comments: ['New Comment', 'New Comment 2']};
		component = renderComponent(CommentList, null, props);
	})

	it('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(2);
	})

	it('shows each comment provided', () => {
		// multiple expect methods can be utilized to test components
		expect(component).to.contain('New Comment');
		expect(component).to.contain('New Comment 2');
	})
})
