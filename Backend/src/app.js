const express=require('express')
const app=express();
const cookieParser=require('cookie-parser')
const userRouter=require("./routes/user.route")

app.use(cookieParser());
app.use(express.json());

// user registration
app.use('/api',userRouter)


module.exports=app;