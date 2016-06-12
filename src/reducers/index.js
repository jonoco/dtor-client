import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth-reducer';
import torrReducer from './torr-reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  torrents: torrReducer
});

export default rootReducer;
