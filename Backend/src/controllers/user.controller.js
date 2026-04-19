const userModel=require("../models/user.model")
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken');


async function registerController(req,res){
    const {username,email,password}=req.body;

    // search in databse
    const isUserAlreadyExist=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExist){
        return res.json({
            message:"User already exist"
        })
    }

    // password hashed
    const hashedPass=await bcrypt.hash(password,10);

    const user=await userModel.create({
        username,
        email,
        password:hashedPass
    });

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{
        expiresIn:24*24*60*60
    })

    res.cookie("token",token);

    res.status(201).json({
        message:"User registered succesfully"
    });


}

async function loginController(req,res){
    const {username,email,password}=req.body;

    const user=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!user){
        return res.json({
            message:"User not found in database"
        })
    }

    const pass=await bcrypt.compare(password,user.password);
    if(!pass){
        return res.json({
            message:"password is incorrect"
        })
    }
    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,
    {expiresIn:24*24*60*60})

    res.cookie("token",token);

    res.status(200).json({
        message:"user logged in sucessfully"
    })
}


module.exports={registerController,loginController}