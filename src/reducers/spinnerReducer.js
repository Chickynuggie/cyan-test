import ACTIONTYPES from '../actions/actionTypes';

export const spinnerReducer = (isSpinning = false, action) => {
    switch (action.type) {
        case ACTIONTYPES.START_SPINNING: return true;
        case ACTIONTYPES.STOP_SPINNING: return false;
        default: return isSpinning;
    }
}