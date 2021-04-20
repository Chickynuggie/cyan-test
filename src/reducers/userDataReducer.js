import ACTIONTYPES from '../actions/actionTypes';

export const userDataReducer = (userData = [], action) => {
    switch(action.type) {
        case ACTIONTYPES.GET_USERS: return action.payload;
        default: return userData;
    }
}
