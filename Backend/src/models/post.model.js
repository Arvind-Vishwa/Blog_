const mongoose=require('mongoose')


const postSchema=new mongoose.Schema({
    img:{
        type:String,
        required:[true,"img is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    description:{
        type:String,
        required:[true,"description is required"]
    }
});

const postModel=mongoose.model("post",postSchema);

module.exports=postModel;