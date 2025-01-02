const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ecommerce-project'
 
const authUser = async(req,res,next) =>{

    const token = req.headers.authorization;

    if(!token){ 
        return res.json({success:false , message:"Not Authorized Login again"})
    }

    try{
        const token_decode = jwt.verify(token,JWT_SECRET);
        req.body = {
            userId: token_decode.userId,
            username:token_decode.username,
            profilePic:token_decode.profilePic
        }
        next();
    }catch(error){
        console.log(error);
        return res.json({success:false , message:error})
    }
}

module.exports = authUser;