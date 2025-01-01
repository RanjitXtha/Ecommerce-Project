const express = require('express');
const userRouter = express.Router();

const {LogIn , SignUp , adminLogIn} = require('../Controllers/authController');

userRouter.post('/user/login',LogIn);
userRouter.post('/user/signup',SignUp);
userRouter.post('/user/admin-login',adminLogIn);

module.exports = userRouter;
