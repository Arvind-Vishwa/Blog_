const express=require('express');
const router=express.Router();
const {registerController,loginController}=require("../controllers/user.controller")

// register router
router.post('/register',registerController);

// login router
router.post('/login',loginController);







module.exports=router;