import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import credentialReducer from '../Login/CredentialReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore takes two arguments:
//   1. a reducer or combination of reducers
//   2. (optional) middleware to be executed between the dispatching of
//      the action and the actual change of state.
//
export default () => {
  const store = createStore(
    combineReducers({
      credentials: credentialReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
