const postModel=require('../models/post.model')
const { uploadFile }=require('../services/imagekit.service')
const userModel=require("../models/user.model")
const jwt=require('jsonwebtoken')



async function postController(req,res){

    let token=req.cookies.token;
    if(!token){
        return res.json({
            message:"token is not founded"
        })
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    if(!decoded){
        res.json({
            message:"Credential is not found"
        })
    }

    const{title,description,author}=req.body;
    const file=req.file;
    console.log(file)

    const result=await uploadFile(file.buffer.toString('base64'));
    console.log(result)

    const user=await postModel.create({
        title,
        description,
        author,
        uri:result.url,
        createdBy:decoded.id
    })

    res.status(200).json({
        message:"Post created succesfully",
        post:user
    })

}

async function getAllPost(req,res){
    let allPost=await postModel.find();

    res.status(200).json({
        message:"all post fetched sucessfully",
        post:allPost
    })
}


module.exports={postController,getAllPost}
