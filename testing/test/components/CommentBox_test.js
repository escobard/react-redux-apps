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
			
		})

		it('shows text that is entered', () => {

		})

		it('when submitted, clears the input', () => {
			
		})

	})

});

