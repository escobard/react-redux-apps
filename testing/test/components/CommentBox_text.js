import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

// can find the chai-jquery assertions here: https://github.com/chaijs/chai-jquery
describe('Tests CommentBox component', () => {
	// renders the component with props, utilizing a `redux` store
	let component = renderComponent(CommentBox);

	it('has a text area', () => {
		// uses expect to make an assertion about a specific component
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});
	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	});
});

