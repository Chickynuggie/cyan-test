import ACTIONTYPES from '../actions/actionTypes';

export const toasterReducer = (message = 'no more pages to load no more pages to load no more pages to load', action) => {
    switch(action.type) {
        case ACTIONTYPES.POP_TOAST: return action.payload;
        default: return message;
    }
}