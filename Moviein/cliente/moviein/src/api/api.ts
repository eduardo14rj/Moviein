import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const baseURL =  "http://3.222.200.242:3001" ;

const Api = axios.create({
    baseURL
})

export default Api;
