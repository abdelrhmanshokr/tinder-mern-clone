import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const connection_url = process.env.MONGOOSE_CONNECTION_URL

async function dbConnect(){
    try{
        await mongoose.connect(connection_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true        
        })
        console.log('Connected to database successfully');
    }catch(err){
        console.log(`Error connecting to database ${err.message}`)
    }
}

export default dbConnect;