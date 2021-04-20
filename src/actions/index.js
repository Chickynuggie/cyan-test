import { userDataEndpointURL, pageSize } from '../constants/';
import ACTIONTYPES from './actionTypes';

import axios from 'axios';

export const getUserData = (pageNumber = 1) => async (dispatch) => {
    const URL = `${userDataEndpointURL}?page=${pageNumber}&limit=${pageSize}`;
    const response = await axios.get(URL);

    if(response.data.length) {
        dispatch({ type: ACTIONTYPES.GET_USERS , payload: response.data});
        dispatch({ type: ACTIONTYPES.SET_PAGENO , payload: pageNumber});
    } else {
        dispatch({type: ACTIONTYPES.POP_TOAST, payload: 'No more pages to load.'});
    }
};

export const selectUser = (userId) => (dispatch) => {
    dispatch({
        type: ACTIONTYPES.SELECT_USER,
        payload: userId
    });
};

export const clearUserSelection = () => (dispatch) => {
    dispatch({
        type: ACTIONTYPES.CLEAR_USERSELECTION,
        payload: null
    });
};

export const popToastMessage = (message) => (dispatch) => {
    dispatch({
        type: ACTIONTYPES.POP_TOAST,
        payload: message
    });
}

//not needed for now
// export const startSpinning = () => dispatch => {
//     dispatch({
//         type: ACTIONTYPES.START_SPINNING
//     });
// };

// export const stopSpinning = () => dispatch => {
//     dispatch({
//         type: ACTIONTYPES.STOP_SPINNING
//     });
// };