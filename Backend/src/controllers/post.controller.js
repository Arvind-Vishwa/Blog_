const postModel=require('../models/post.model')
const {uploadFile}=require('../services/imagekit.service')
const userModel=require("../models/user.model")
async function postController(req,res){
    let token=req.cookies.token;
    if(!token){
        return res.json({
            message:"token is not founded"
        })
    }

    const decoded=bcrypt.verify(token,process.env.JWT_SECRET);
    if(!decoded){
        res.json({
            message:"Credential is not found"
        })
    }

    const{title,description,author}=req.body;
    const file=req.file;

    const result=await uploadFile(file.buffer.toString('base64'));

    const user=await postModel.create({
        title,
        description,
        author,
        uri:result.uri,
        createdBy:decoded.id
    })

    res.status(200).json({
        message:"User created succesfully"
    })

    
    

}


module.exports={postController}
