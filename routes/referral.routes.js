const express=require('express')
const router=express.Router()
const Refer =require('../controllers/referral.controllers')

router.post('/refer',Refer)

module.exports=router