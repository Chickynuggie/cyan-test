import ACTIONTYPES from '../actions/actionTypes';

export const toasterReducer = (message = '', action) => {
    switch (action.type) {
        case ACTIONTYPES.POP_TOAST: return action.payload;
        default: return message;
    }
}