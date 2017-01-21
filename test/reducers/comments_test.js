import { expect, createRandomString } from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Given a Comments Reducer', () => {
    it('Then it should return an empty array when called with an unknown action type', () => {
        const action = {type: createRandomString(), payload: 'payload'};
        expect(commentsReducer([], action)).to.eql([]);
    });

    it('Then it should return an array when called with a SAVE_COMMENT action type and payload', () => {
        const action = {type: SAVE_COMMENT, payload: 'payload'};
        expect(commentsReducer([], action)).to.eql(['payload']);
    })
})