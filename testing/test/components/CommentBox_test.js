import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

// can find the chai-jquery assertions here: https://github.com/chaijs/chai-jquery
describe('Tests CommentBox component', () => {
	
	let component;

	// this function gets called before each `it` is utilized
	// this is scope specific, and will run within any scope
	beforeEach(() =>{
		// renders the component with props, utilizing a `redux` store
		component = renderComponent(CommentBox);
	})

	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	});

	describe('Entering some text', () =>{

		beforeEach(() =>{
			component.find('textarea')
			// this method accepts the type of event, and the value expected after the event
			// very useful for testing in component event handlers
			.simulate('change', 'new comment');
		})

		it('shows text that is entered', () => {
			expect(component.find('textarea')).to.have.value('new comment');
		})

		it('when submitted, clears the input', () => {
			component
			// this allows the component to simmulate an additional event to the component within this it statement only
			.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		})

	})

});

