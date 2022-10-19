import express from 'express';
import bodyParser from 'body-parser'
const app=express();
import userRouter from './routes/users.js';
const PORT=5000;
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    console.log('Test');
    res.send("Hello from Home page");
})
app.use('/users',userRouter);
app.listen(PORT,()=>{
    console.log("Server is up and running");
})