import { api } from '../services/api';
import { browserHistory } from 'react-router';

import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
export const signup = (user) => {
	return function(dispatch) {
		dispatch({ type: SIGNUP_REQUEST });

		api.post('/signup', user)
			.then(res => {
				dispatch({
					type: SIGNUP_SUCCESS,
					payload: res.data
				});
			})
			.catch(err => {
				dispatch({
					type: SIGNUP_FAILURE,
					error: err
				});
			});
	};
}

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
export const login = (user) => {
	return function(dispatch) {
		dispatch({ type: LOGIN_REQUEST });

		api.post('/login', user)
			.then(res => {
				dispatch({
					type: LOGIN_SUCCESS,
					payload: res.data
				});
			})
			.catch(err => {
				console.log(err);

				dispatch({ 
					type: LOGIN_FAILURE,
					error: err
				});
			});
	};
}

import { LOG_OUT } from './types';
export const logout = () => {
	return {
		type: LOG_OUT
	};
}

export const authenticateDrive = (token) => {
	return function(dispatch) {
		api.get(`/login/drive`, {
			headers: { 'Authorization': token }
		})
		.then(res => {
			location.assign(res.data.url);
		})
	};
}

import { DRIVE_AUTH } from './types';
export const authorize = (token, code) => {
	return function(dispatch) {
		api.get(`/auth?code=${code}`, {
			headers: { 'Authorization': token }
		})
		.then(res => {
			dispatch({ type: DRIVE_AUTH });
			browserHistory.push('/torrent');
		});
	};
}

import { SUBMIT_TORRENT, TORRENT_ADDED, REQ_TORRENT } from './types';
export const submitTorrent = (token, torrent) => {
	return function(dispatch) {
		dispatch({ type: REQ_TORRENT });

		api.post('/torrent', {
			torrent
		},{
			headers: { 'authorization': token }
		})
		.then(res => {
			console.log('torrent added: ' + res.data.torrent);
			dispatch({ type: TORRENT_ADDED });
		})
		.catch(err => {
			console.log('error: ' + err.message);
		});
	};
}

import { TORRENT_UPDATE } from './types';
export const updateTorrent = (torrent) => {
	return {
		type: TORRENT_UPDATE,
		torrent
	};
}

import { REMOVE_TORRENT } from './types';
export const removeTorrent = (token, torrentID) => {
	return function(dispatch) {
		api.delete('/torrent', {
		 torrentID
		}, {
			headers: { 'authorization': token }
		})
		.then(res => {
			dispatch({
				type: REMOVE_TORRENT,
				id
			});
		})
		.catch(err => {
			console.log('error: ' + err.message);
		});
	};
}







