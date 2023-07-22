import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

const PORT = 4000
const app = express();

app.use(cors);

await mongoose.connect("mongodb+srv://kwenaND:kwenamachaba190@cluster0.qt8da8q.mongodb.net/?retryWrites=true&w=majority"
);
console.log('mongoDb connection is successful');

app.get('/',(res, req) =>{
res.send("hello world");
});

app.listen(PORT,() => {
    console.log('Server is running at http://localhost:4000');
});