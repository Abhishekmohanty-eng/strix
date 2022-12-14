const express=require('express')
const router=require('./src/router/route')
const app=express()
app.use(express.json());
require("dotenv").config();
// const multer=require('multer')
// app.use(multer().any())


const mongoose = require("mongoose");
       
    mongoose.connect(process.env.mongodb,{
        useNewUrlParser: true,
    })
    .then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log(err);
    })

app.use('/',router)
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})

