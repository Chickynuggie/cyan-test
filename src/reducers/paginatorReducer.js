import ACTIONTYPES from '../actions/actionTypes';

export const paginatorReducer = (currentPage = 1, action) => {
    switch(action.type) {
        case ACTIONTYPES.INCREMENT_PAGENO: return action.payload + 1;
        case ACTIONTYPES.DECREMENT_PAGENO: return action.payload - 1;
        default: return currentPage;
    }
}