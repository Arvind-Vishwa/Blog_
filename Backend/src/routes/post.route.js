const express=require('express');
const router=express();
const {postController,getAllPost}=require("../controllers/post.controller")
const multer=require('multer')
const {authUser}=require('../middleware/auth.middleware')

const upload=multer({
    storage:multer.memoryStorage()
})

router.post('/post',authUser,upload.single('img'),postController);

router.get('/post',getAllPost)



module.exports=router;