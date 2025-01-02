const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ecommerce-project';
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'adminadmin'

const adminAuth = async(req,res)=>{
    try{
        const {token} = req.headers;
        if(!token){
            return res.json({success:false,message:'Admin authorization denied'})
        }

        const decoded_token = jwt.verify(token,JWT_SECRET);
        
    }catch(error){
        console.log(error);
    }
}