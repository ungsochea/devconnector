const express=require('express');
const router=express.Router();

//@route    GET api/posts/test
//@Desc     Test post route
//@access   Public 


router.get('/test',(req,res)=>res.json({msg:"Post works"}));

module.exports=router;