import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('Given a CommentList component', () => {
    it('Then it should be a function', () => {
        expect(CommentList).to.be.a('function');
    });

    describe('When render', () => {
        let component;

        beforeEach(() => {
            component = renderComponent(CommentList);
        });

        it('Then the rendered component should have "comment-list" class', () => {
            expect(component).to.have.class('comment-list');
        });
    });
})