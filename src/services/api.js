import axios from 'axios';

export const API_URL = 'https://dtor-api.herokuapp.com/api';

export const api = axios.create({
	baseURL: API_URL,
	timeout: 10000,
});