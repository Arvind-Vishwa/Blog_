const express=require('express');
const router=express();
const {postController}=require("../controllers/post.controller")

router.post('/post',postController);





module.exports=router;