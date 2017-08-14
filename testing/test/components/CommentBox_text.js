import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('Tests CommentBox component', () => {

	it('has a text area', () => {

		// renders the component with props, utilizing a `redux` store
		const component = renderComponent(CommentBox);

		// uses expect to make an assertion about a specific component
		expect(component).to.contain('React simple starter');
	});

	it('has a button', () => {

		// renders the component with props, utilizing a `redux` store
		const component = renderComponent(CommentBox);

		// uses expect to make an assertion about a specific component
		expect(component).to.contain('React simple starter');
	});

});

