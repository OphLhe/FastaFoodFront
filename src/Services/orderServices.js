import API from './api';

export const order = () => API.get('./order' , {
    headers: {
        Authorization: `${localStorage.getItem('token')}`
}});