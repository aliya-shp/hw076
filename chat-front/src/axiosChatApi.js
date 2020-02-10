import axios from 'axios';

const axiosChatApi = axios.create({
    baseURL: 'http://localhost:8000'
});

export default axiosChatApi;