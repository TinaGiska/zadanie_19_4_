function comments(state = [], action) {
switch(action.type) {
case ADD_COMMENT:
return [{
    id: action.id,
    text: action.text
    votes: 0
}
, ...state.comments];
}
}

function comments(state = [], action) {
switch(action.type) {
case DELETE_COMMENT:
return [{
state.comments.filter(comment => comment.id !== action.id)]
}
}
}
