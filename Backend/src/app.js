const express=require('express')
const app=express();
const cookieParser=require('cookie-parser')


const userRoute=require("./routes/user.route")
const postRoute=require("./routes/post.route")


app.use(cookieParser());
app.use(express.json());

// user registration
app.use('/api',userRoute)
app.use('/api/create',postRoute)


module.exports=app;