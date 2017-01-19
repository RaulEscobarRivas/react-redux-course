import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('Given a CommentList component', () => {
    it('Then it should be a function', () => {
        expect(CommentList).to.be.a('function');
    });

    describe('When render', () => {
        let component;

        beforeEach(() => {
            const props = { comments: ['New comment', 'Another new comment'] };
            component = renderComponent(CommentList, null, props);
        });

        it('Then the rendered component should have "comment-list" class', () => {
            expect(component).to.have.class('comment-list');
        });

        it('Then it should show a LI for each comment provided', () => {
            expect(component.find('li').length).to.equal(2);
        });

        it('Then it should render each comment provided', () => {
            expect(component).to.contain('New comment');
            expect(component).to.contain('Another new comment');
        });
    });
})