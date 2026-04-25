
async function authUser(req,res,next){
    
    let token=req.cookies.token;

    if(!token){
        return res.status(402).json({
            message:"Unauthorized User"
        })
    }
    next();
}


module.exports={authUser}