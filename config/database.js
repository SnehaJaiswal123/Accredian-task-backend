const mysql=require('mysql2/promise')
require('dotenv').config()

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:process.env.SQL_PASS,
    database:process.env.DB
})

module.exports=pool