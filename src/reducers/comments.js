import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
    if (action.type === SAVE_COMMENT && action.payload) {
        return [...state, action.payload];
    }
    return state;
};