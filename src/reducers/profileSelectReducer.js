import ACTIONTYPES from '../actions/actionTypes';

export const profileSelectReducer = (selectedProfileId = null, action) => {
    switch (action.type) {
        case ACTIONTYPES.SELECT_USER: return action.payload;
        case ACTIONTYPES.CLEAR_USERSELECTION: return null;
        default: return selectedProfileId;
    }
}
