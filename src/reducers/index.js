import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';
import { profileSelectReducer } from './profileSelectReducer';
import { paginatorReducer } from './paginatorReducer';

export default combineReducers({
    userData: userDataReducer,
    selectedProfileId: profileSelectReducer,
    currentPage: paginatorReducer
 });
