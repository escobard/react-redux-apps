import { renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// Use descripe to group together similar tests
// The string in here is rendered within the console
describe('Tests app component', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App);
	})
	
	it('shows a comment box', () =>{
		expect(component.find('.comment-box')).to.exist;
	})

	it('shows a comment list', () =>{
		expect(component.find('.comment-list')).to.exist;
	})
	
	/* describes one attribute of this component that is being tested
	it('shows the correct text', () => {
		/*
		// this method expects a specific attribute of the tested component to be true
		expect
		// this is the component being tested
		(component)
		// this is the boolean that ties the component to the expect
		.to.have.class
		// this is the value that we expect
		('comment-box');
		// utilizes stephen griders method to render react components - this is REALLY useful for react applications that require props
		const component = renderComponent(App);

		// uses expect to make an assertion about a specific component
		expect(component).to.contain('React simple starter');
	
	}); */



});

