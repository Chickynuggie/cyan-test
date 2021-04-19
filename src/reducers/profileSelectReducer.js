import ACTIONTYPES from '../actions/actionTypes';

export const profileSelectReducer = (state = null, action) => {
    switch(action.type) {
        case ACTIONTYPES.SELECT_USER: return action.payload;
        default: return state;
    }
}
