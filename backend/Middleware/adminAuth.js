const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ecommerce-project';
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'adminadmin'

const adminAuth = async(req,res,next)=>{
    try{ 
        const token = req.headers.authorization;

        //console.log(req.headers);
        // Object.entries(req).forEach(([key, value]) => {
        //     console.log(`Key: ${key}, Value: ${value}`);
        // });
        
        if(!token){
            return res.json({success:false,message:'Admin authorization denied'})
        }

        const decoded_token = jwt.verify(token,JWT_SECRET);
        req.body={
            email:decoded_token.email,
            role:decoded_token.role
        }
        next();
    }catch(error){
        console.log(error);
    }
}
module.exports = adminAuth;