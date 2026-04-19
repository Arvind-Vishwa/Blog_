const mongoose=require('mongoose')


async function connectDB(){
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("database is connected");
    }catch(err){
        console.log("databse is connection err",err);
    }

}

module.exports={connectDB}