import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';
import { profileSelectReducer } from './profileSelectReducer';

export default combineReducers({
    userData: userDataReducer,
    selectedProfileId: profileSelectReducer
 });
