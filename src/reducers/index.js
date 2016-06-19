import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import torrents from './torrents';
import torrentState from './torrent-state';

const rootReducer = combineReducers({
  form,
  auth,
  torrents,
  torrentState
});

export default rootReducer;
