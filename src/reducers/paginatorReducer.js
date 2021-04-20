import ACTIONTYPES from '../actions/actionTypes';

export const paginatorReducer = (currentPage = 1, action) => {
    switch (action.type) {
        case ACTIONTYPES.SET_PAGENO: return action.payload;
        default: return currentPage;
    }
}