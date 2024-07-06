const express = require('express');
const pool=require('./config/database')
const referralRouter=require('./routes/referral.routes')
const cors=require('cors')
const app=express();
const port=process.env.PORT||7000
app.use(express.json())
app.use(cors({
   origin:"*"
}))
require('dotenv').config()

app.use('/api/v1/referrals',referralRouter)

pool.query('SELECT 1')
.then(()=>{
   console.log("MySQL DB connected");
   app.listen(port,()=>{
      console.log("App is running");
   })
})
.catch((err)=>{
   console.log("Error in connection",err);
})

