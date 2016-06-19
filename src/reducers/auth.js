import { 
	SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOG_OUT,
  DRIVE_AUTH
} from '../actions/types';

const initialState = {
	token: null,
	username: null,
	driveAuth: null,
	error: null,
	isAccessing: false
};

export default function(state = initialState, action) {

	switch(action.type) {
		case SIGNUP_REQUEST:
			return Object.assign({}, state, { isAccessing: true });
		case SIGNUP_SUCCESS:
			return Object.assign({}, state, { 
				token: action.payload.token,
				username: action.payload.username,
				error: null,
				isAccessing: false
			});
		case SIGNUP_FAILURE:
			return Object.assign({}, state, {
				error: action.error.data,
				isAccessing: false
			});

		case LOGIN_REQUEST:
			return Object.assign({}, state, { isAccessing: true });
		case LOGIN_SUCCESS:
			return Object.assign({}, state, { 
				token: action.payload.token,
				username: action.payload.username,
				driveAuth: action.payload.driveAuth,
				error: null,
				isAccessing: false
			});
		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				error: action.error.data,
				isAccessing: false,
			});

		case LOG_OUT:
			return initialState;

		case DRIVE_AUTH:
			return Object.assign({}, state, {
				driveAuth: true
			});
	}

	return state;
}