import ACTIONTYPES from '../actions/actionTypes';

export const paginatorReducer = (state = [], action) => {
    switch(action.type) {
        case ACTIONTYPES.INCREMENT_PAGENO: return action.payload + 1;
        case ACTIONTYPES.DECREMENT_PAGENO: return action.payload - 1;
        default: return state;
    }
}