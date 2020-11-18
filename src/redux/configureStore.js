import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { user } from './user';
import { companies } from './companies';

const ConfigureStore = () => {
  const rootReducer = combineReducers({
    user,
    companies,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
};

export default ConfigureStore;
