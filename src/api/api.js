import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8080`, // 기본 서버 주소 입력
    headers: {
        'Content-Type': `application/json`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true',
    },
});

export default api;
