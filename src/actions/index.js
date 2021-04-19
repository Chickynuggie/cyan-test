import { userDataEndpointURL } from '../constants/';
import ACTIONTYPES from './actionTypes';

import axios from 'axios';

export const getUserData = () => async dispatch => {
    const response = await axios.get(userDataEndpointURL);

    dispatch({ type: ACTIONTYPES.GET_USERS , payload: response.data});
};

export const selectUser = (userId) => (dispatch) => {
    dispatch({
        type: ACTIONTYPES.SELECT_USER,
        payload: userId
    });
};
