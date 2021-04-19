import ACTIONTYPES from '../actions/actionTypes';

export const userDataReducer = (state = [], action) => {
    switch(action.type) {
        case ACTIONTYPES.GET_USERS: return action.payload;
        default: return state;
    }
}
