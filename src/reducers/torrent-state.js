import { TORRENT_ERROR, TORRENT_ADDED } from '../actions/types';

const initialState = {
	error: null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case TORRENT_ADDED:
			return Object.assign({}, state, {
				error: null
			});
		case TORRENT_ERROR:
			return Object.assign({}, state, {
				error: action.error
			});
	}

	return state;
}