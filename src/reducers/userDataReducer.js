import actionTypes from '../actions/actionTypes';

export const userDataReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.GET_USERS: return [...state, action.payload];
        default: return state;
    }
}
