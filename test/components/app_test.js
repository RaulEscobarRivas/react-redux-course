import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('Given an App component' , () => {

  it('it should be a function', () => {
  	expect(App).to.be.a('function');
  });

  describe('When rendering the component', () => {
  	  let component;

	  beforeEach(() => {
	    component = renderComponent(App);
	  });

	  it('Then it should render "React simple starter" message', () => {
	    expect(component).to.contain('React simple starter');
	  });
  });
});
