require("dotenv").config()
const express = require('express')
const app = express()
const cors = require("cors")
const router = require('./route/dataroute')
const adminroute = require('./route/adminroute')
const connection = require('./config/config')

app.use(cors());

app.use(express.json());
app.use("/admin",adminroute)
app.use('/form',router)

app.listen(process.env.Port,async()=>{
    try{
        await connection()
        console.log("Server is live on Port " , process.env.Port);
    }
    catch(err){
        console.log("Server error ", err);
    }
})
