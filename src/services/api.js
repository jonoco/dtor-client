import axios from 'axios';

export const API_URL = 'http://localhost:3090/api';

export const api = axios.create({
	baseURL: API_URL,
	timeout: 10000,
});