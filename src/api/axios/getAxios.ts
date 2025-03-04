import axios from "axios";

export const getAxios = (baseUrl: string) =>
    axios.create({
        baseURL: baseUrl,
        timeout: 1000,
        headers: {
            accept: "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        },
    });


