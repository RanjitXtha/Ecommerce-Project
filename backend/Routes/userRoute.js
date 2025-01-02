const express = require('express');
const userRouter = express.Router();
const upload = require('../Middleware/multer');

const {LogIn , SignUp , adminLogIn} = require('../Controllers/authController');

userRouter.post('/user/login',LogIn);
userRouter.post('/user/signup',upload.single('profilePic'),SignUp);
userRouter.post('/admin/login',adminLogIn);

module.exports = userRouter;
