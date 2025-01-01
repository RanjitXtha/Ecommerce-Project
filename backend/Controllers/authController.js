const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = require('../Schema/userSchema');
const JWT_SECRET = 'ecommerce-project'

const LogIn = async(req,res)=>{
    
    try{
        console.log("running");
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


    const token = jwt.sign({userId:user._id , username:user.username ,profilePic: user.profielPic},JWT_SECRET);
    return res.json({success:true,token});
    }catch(error){
        console.log(error);
        return res.json({success:false, message:{error}});
    }
}

const SignUp = async(req,res)=>{
    try{
        const {email,username,password} = req.body;
        const userExists = await userSchema.findOne({email});

        if(userExists){
            return res.json({success:false,message:'User already Exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        const newUser = new userSchema({
            email,username,password: hashedPassword
        })

        const user = await newUser.save();
        const userId = user._id;
        const token = jwt.sign({userId:user._id , username:user.username ,profilePic: user.profielPic},JWT_SECRET);
        res.json({success:true,token})
    }catch(error){
        console.log(error);
        return res.json({success:false, message:{error}})
    }

    

}

const adminLogIn = async(req,res)=>{

}

module.exports = {LogIn , SignUp , adminLogIn}