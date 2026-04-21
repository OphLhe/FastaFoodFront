import API from './api';

export const addStocks = (data) => API.post('./addStocks',data); 

export const stocks = () => API.get('./stocks' , {
    headers: {
        Authorization: `${localStorage.getItem('token')}`
}});

export const categoryName = () => API.get('./getCategoryName', {
    headers: {
        Authorization: `${localStorage.getItem('token')}`
}});

export const productName = () => API.get('./getProductByName', {
    headers:{
        Authorization: `${localStorage.getItem('token')}`
    }
} )