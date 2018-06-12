
import uuid from uuid;


const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('kolejny komentarz!');


const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}


const DELETE_COMMENT = 'EDIT_COMMENT';

function deleteComment(text) {
    return {
        type: DELETE_COMMENT,
        text,
        id: uuid.v4()
    }
}


const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function thumbUp(text) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: uuid.v4()
    }
}


const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function thumbDown(text) {
    return {
        type: THUMB_DOWN_COMMENT,
        text,
        id: uuid.v4()
    }
}
