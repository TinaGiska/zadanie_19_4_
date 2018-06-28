
import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const addComment = text => {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4(),
	};
};

const boundAddComment = text => dispatch(addComment(text));

const editComment = text => {
	return {
		type: EDIT_COMMENT,
		text,
		id,
	};
};

const boundEditComment = (text, id) => dispatch(editComment(text, id));

const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id,
	};
};

const boundRemoveComment = id => dispatch(removeComment(id));

const thumbUpComment = (id, likes) => {
	return {
		type: THUMB_UP_COMMENT,
		id,
		likes: likes + 1,
	};
};

const boundThumbUpComment = (id, likes) => dispatch(thumbUpComment(id, likes));

const thumbDownComment = (id, dislikes) => {
	return {
		type: THUMB_DOWN_COMMENT,
		id,
		dislikes: dislikes + 1,
	};
};

const boundThumbDownComment = (id, likes) =>
	dispatch(thumbDownComment(id, dislikes));
