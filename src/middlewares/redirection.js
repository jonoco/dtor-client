import { browserHistory } from 'react-router';
import {
	LOGIN_SUCCESS, SIGNUP_SUCCESS, LOG_OUT
} from '../actions/types';

export default function({ dispatch }) {
	return next => action => {
		switch (action.type) {
			case LOGIN_SUCCESS:
				browserHistory.push('/torrent');
			case SIGNUP_SUCCESS:
				browserHistory.push('/torrent');
		}

		return next(action);
	}
}