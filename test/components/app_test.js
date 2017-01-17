import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('Given an App component' , () => {

  it('it should be a function', () => {
  	expect(App).to.be.a('function');
  });

  describe('When render', () => {
  	  let component;

	  beforeEach(() => {
	    component = renderComponent(App);
	  });

	  it('Then it should render a CommentBox', () => {
	    expect(component.find('.comment-box')).to.exist;
	  });
  });
});
