import { SAVE_COMMENT } from './types';

export function saveComment(payload) {
    return {
        type: SAVE_COMMENT,
        payload
    }
};