import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:3090/api' : 'https://dtor.herokuapp.com/api';

export const api = axios.create({
	baseURL: API_URL,
	timeout: 10000,
});