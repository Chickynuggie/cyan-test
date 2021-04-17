import { combineReducers } from 'redux';
import { userDataEndpointURL } from '..constants/';

const usersReducer = () => {
    axios.get(userDataEndpointURL).then((response) => {
        return response;
    });
}

export default combineReducers({
    users: usersReducer
});
