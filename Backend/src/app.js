const express=require('express')
const app=express();
const cookieParser=require('cookie-parser')
const cors=require('cors')


const userRoute=require("./routes/user.route")
const postRoute=require("./routes/post.route")

app.use(cors({
    origin:"https://endearing-kheer-c04395.netlify.app/",
    credentials:true
}));

app.use(cookieParser());
app.use(express.json());

// user registration
app.use('/api',userRoute)
app.use('/api/create',postRoute)


module.exports=app;