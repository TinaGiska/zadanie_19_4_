import {ADD_COMMENT} from './actions'
import {DELETE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
    comments,
    users
});

const initialState = {
    comments: [],
    users: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            });

        case DELETE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
            return Object.assign({}, state, {

            });

        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {

            });

        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                
            });
        default:
            return state;
    }
}

require("babel-core").transform("code", {
  plugins: ["transform-object-rest-spread"]
});

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            …
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        default:
            return state;
    }
}
