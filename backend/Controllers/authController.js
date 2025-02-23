require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = require('../Schema/userSchema');
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const LogIn = async(req,res)=>{
    try{
        const {email , password} = req.body;
        const user = await userSchema.findOne({email});

        if (!user) {
            console.log('User doesn\'t exist');
            return res.json({success:false, message: 'User does not exist' });
        }
    const isPasswordCorrect = await bcrypt.compare(password , user.password);

    if(!isPasswordCorrect){
        console.log('Incorrect Password');
        return res.json({success:false,message:'Wrong Password'})
    }


    const token = jwt.sign({userId:user._id , username:user.username ,profilePic: user.profilePic},JWT_SECRET);
    return res.json({success:true,token});
    }catch(error){
        console.log(error);
        return res.json({success:false, message:{error}});
    }
}

const SignUp = async(req,res)=>{
    console.log("recieved");
    try{
        const {email,username,password} = req.body;
        const profilePic = req.file ? req.file.filename : null;
        console.log(profilePic + 'this is a profile')
        console.log(username+email+profilePic);
        const userExists = await userSchema.findOne({email});

        if(userExists){
            return res.json({success:false,message:'User already Exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        const newUser = new userSchema({
            email,username,password: hashedPassword,profilePic
        })

        const user = await newUser.save();
        const token = jwt.sign({userId:user._id , username:user.username ,profilePic: user.profilePic},JWT_SECRET);
    return res.json({success:true,token});
    }catch(error){
        console.log(error);
        return res.json({success:false, message:{error}})
    }

    

}

const adminLogIn = async(req,res)=>{
    try{
        console.log("admin running")
        const {email,password} = req.body;
        if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD){
            const token = jwt.sign({email , role:'admin' },JWT_SECRET);
            res.json({success:true,token})
        }else{
            res.json({success:false,message:'Invalid Credentials'})
        }

    }catch(error){
        console.log(error);
        res.json({succss:false,message:error})
    }
}

module.exports = {LogIn , SignUp , adminLogIn}