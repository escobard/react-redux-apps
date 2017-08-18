import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('Tests CommentList component', () => {

	let component;
	
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