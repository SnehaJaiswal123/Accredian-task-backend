const db=require('../config/database')

const Refer=async(req,res)=>{
     try{
        const {referrer_name, referrer_email, referee_name, referee_email, course_interested} = req.body;
        const newReferral=await db.query(`INSERT INTO referrals(referrer_name, referrer_email, referee_name, referee_email, course_interested) VALUES(?,?,?,?,?)`,[referrer_name, referrer_email, referee_name, referee_email, course_interested])
        res.status(201).json({
            success:true,
            message:"Data saved",
            data:newReferral[0][0]
        })
     }
     catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error in saving data"
        })
     }
}

module.exports=Refer