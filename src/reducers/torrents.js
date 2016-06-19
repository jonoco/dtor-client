import { TORRENT_UPDATE, REMOVE_TORRENT } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case TORRENT_UPDATE:
			const { id, name, progress, uploaded, error } = action.torrent;

			return Object.assign({}, state, {
				[id]: { name, progress, uploaded, id, error }
			});
		case REMOVE_TORRENT:
			const torrents = _.omit(state, [action.id]);

			return torrents;
	}

	return state;
}