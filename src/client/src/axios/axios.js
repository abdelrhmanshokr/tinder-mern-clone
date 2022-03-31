import axios from 'axios';
// import * as dotenv from 'dotenv';
// dotenv.config();

// creating an instacnce 
const instance = axios.create({
    // baseURL: process.env.BACKEDN_SERVER_URL
    baseURL: 'http://localhost:5000'
});

export default instance;