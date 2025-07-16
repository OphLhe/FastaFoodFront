import API from './api';

export const stocks = (data) => API.post('./stocks', data); 