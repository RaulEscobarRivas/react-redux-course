import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment-box';

describe('Given an CommentBox component' , () => {

  it('it should be a function', () => {
  	expect(CommentBox).to.be.a('function');
  });

  describe('When rendering the component', () => {
  	  let component;

	  beforeEach(() => {
	    component = renderComponent(CommentBox);
	  });

	  it('Then the rendered component should have "comment-box" class', () => {
	    expect(component).to.have.class('comment-box');
	  });

	  it('Then the rendered component should have a text area', () => {
	    expect(component.find('textarea')).to.exist;
	  });

	  it('Then the rendered component should have a button', () => {
	    expect(component.find('button')).to.exist;
	  });

	  it('Then the rendered bugtton should have "Submit Comment" text value', () => {
	    expect(component.find('button')).to.contain('Submit Comment');
	  });
  });
});
