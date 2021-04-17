import { userDataEndpointURL } from '../constants/';
import axios from 'axios';

export const getUserData = () => async dispatch => {
    const response = await axios.get(userDataEndpointURL);

    dispatch({ type: 'GET_USERS', payload: response.data});
};