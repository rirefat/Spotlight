import mongoose from "mongoose";

export async function dbConnect() {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('db connected')
        return connection;
    }catch(err){
        console.error(err.message);
    }
}