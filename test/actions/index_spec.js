import { expect } from '../test_helper';
import { saveComment } from '../../src/actions';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Given the Action creators', () => {
    describe('When the saveComment action creator is called', () => {
        let payload;
        let result;

        beforeEach(() => {
            payload = 'payload';
            result = saveComment(payload);
         })

        it('Then it should return the correct type', () => {
            expect(result.type).to.equal(SAVE_COMMENT);
        });

        it('Then it should return the correct payload', () => {
            expect(result.payload).to.equal(payload);
        });
    });
})