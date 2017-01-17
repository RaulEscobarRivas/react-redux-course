import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment-box';

describe('Given a CommentBox component' , () => {

  it('it should be a function', () => {
  	expect(CommentBox).to.be.a('function');
  });

  describe('When render', () => {
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

	  it('Then the rendered button should have "Submit Comment" text value', () => {
	    expect(component.find('button')).to.contain('Submit Comment');
	  });

	  describe('When entering text', () => {
	  	let comment;

	  	beforeEach(() => {
	  		comment = 'new comment';
	  	 	component.find('textarea').simulate('change', comment);
	  	});

	  	it('Then it should display what is entered', () => {
	  		expect(component.find('textarea')).to.have.value(comment);
	  	});

	  	describe('When submitted', () => {

	  		beforeEach(() => {
	  	 		component.simulate('submit');
	  		})

	  	  	it('Then it should clear the entered text', () => {
	  	  		expect(component.find('textarea')).to.have.value('');
	  	  	});
	  	});
	 });
  });
});

