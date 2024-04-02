import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

var isDev = process.env.NODE_ENV === 'development';

export const baseURL = isDev ? "http://localhost:3001" : "http://3.235.135.8:3001" ;

const Api = axios.create({
    baseURL
})

export default Api;
