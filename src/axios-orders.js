import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-fe19a.firebaseio.com/'
});

export default instance;