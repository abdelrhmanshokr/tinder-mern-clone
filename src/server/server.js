import express from 'express'; 
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

import dbConnect from './src/db/dbConfig.js';
import cardRouter from './src/routes/cardRouter.js'
 
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/cards', cardRouter);

dbConnect();

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});