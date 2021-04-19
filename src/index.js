import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

import AccountsContainer from './components/AccountsContainer';

const store = createStore(combineReducers, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AccountsContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
