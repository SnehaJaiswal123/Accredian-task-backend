const express = require('express');
const conn=require('./config/database')
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


conn.query('SELECT 1')
.then(()=>{
     console.log("Db connected");
     app.listen(process.env.PORT,()=>{
      console.log("Server is running");
     })
})
.catch((err)=>{
   console.log("Error in connecting db:",err);
})


