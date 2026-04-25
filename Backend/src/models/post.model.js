const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    uri:{
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
    },
    author:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
});

const postModel=mongoose.model("post",postSchema);

module.exports=postModel;