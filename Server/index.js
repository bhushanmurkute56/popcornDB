import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try{
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    if(conn){
        console.log("\nMongoDB Connected ✨");
    }} 

    catch (e){
    console.error(`\n❌ MongoDB connection error: ${e.message}`)
}
}

app.get("/health", (req, res) => {
    res.json({ status : "OK", message : "Server is healthy"});
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {console.log(`Server is running on port : ${PORT} ✅`)
connectDB()
})