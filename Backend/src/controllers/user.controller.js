const userModel=require("../models/user.model")
const bcrypt=require("bcrypt")



async function registerController(req,res){
    const {username,email,password}=req.body;

    // search in databse
    const isUserAlreadyExist=userModel.find({
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

    

}


module.exports={registerController}