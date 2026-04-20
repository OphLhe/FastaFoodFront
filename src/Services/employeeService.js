import API from './api';

export const register = (data) => API.post('./register', data); 

export const login =(data) => API.post ('/login', data);

export const getEmployee = () => API.get ('/employee', {
    headers: {
        Authorization: `${localStorage.getItem('token')}`
}});

export const updateEmployee = (data) => API.put ('employee/update', data, {
     headers: {
        Authorization: `${localStorage.getItem('token')}`
}});

export const updatePassword = (data) => API.put('/employee/password', data, {
     headers: {
        Authorization: `${localStorage.getItem('token')}`
}});

export const getWelcome = () => API.get('/employee/welcome', {
     headers: {
        Authorization: `${localStorage.getItem('token')}`
}});