const express=require('express');
const router=express.Router();

//@route    GET api/users/test
//@Desc     Test user route
//@access   Public 

router.get('/test',(req,res)=>res.json({msg:"Users works"}));

module.exports=router;