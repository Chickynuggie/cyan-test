import { userDataEndpointURL } from '../constants/';
import actionTypes from './actionTypes';

import axios from 'axios';

export const getUserData = () => async dispatch => {
    const response = await axios.get(userDataEndpointURL);

    dispatch({ type: actionTypes.GET_USERS , payload: response.data});
};
