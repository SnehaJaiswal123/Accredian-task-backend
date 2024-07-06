const mysql=require('mysql2')
require('dotenv').config()

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.SQL_PASS,
    database:process.env.DB
})

module.exports=conn