import axios from 'axios';

let util = {

};

const server = 'http://yesaido.vip';
// const server = 'http://localhost:8888';


util.ajax = axios.create({
    baseURL: server,
    timeout: 30000
});

export default util;