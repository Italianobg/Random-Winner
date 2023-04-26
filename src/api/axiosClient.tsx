import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: `https://graph.facebook.com/v16.0`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
