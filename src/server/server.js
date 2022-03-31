import express from 'express'; 
import cors from 'cors';
import * as dotenv from 'dotenv';

import dbConnect from './src/db/dbConfig.js';
import cardRouter from './src/routes/cardRouter.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
// this might be used later instead or with cors() right now it works but I don't know for sure why
// either would work
// app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next();
// });
app.use('/api/cards', cardRouter);

dbConnect();

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});