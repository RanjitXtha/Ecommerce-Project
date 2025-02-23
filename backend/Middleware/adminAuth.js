const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ecommerce-project';
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'adminadmin'

const adminAuth = async(req,res,next)=>{
    try{ 
        const token = req.headers.authorization;
        console.log(token)
        
        if(!token){
            return res.json({success:false,message:'Admin authorization denied'})
        }

        const decoded_token = jwt.verify(token,JWT_SECRET);
        
        console.log("succesful")
        req.user={
            email:decoded_token.email,
            role:decoded_token.role
        } //req.user instead of req.body because body can contain item information which will be override.
        next();
    }catch(error){
        console.log(error);
    }
}
module.exports = adminAuth;