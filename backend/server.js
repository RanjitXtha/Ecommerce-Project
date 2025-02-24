require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const userRouter = require('./Routes/userRoute');
const productRouter = require('./Routes/productRoute');
const orderRouter = require('./Routes/orderRoute');
const authUser  = require('./Middleware/auth');
const adminAuth = require('./Middleware/adminAuth');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const dbURL = process.env.DB_URL;
const app = express();
app.options('*', cors());
app.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(dbURL).then(()=>{
    app.listen(5000); 
    console.log('server created');
    console.log('connected to db');
}).catch((error)=>{console.log(error)});

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get('/protected',authUser,(req,res)=>{
    res.json({success:true,message:'You are authenticated',
        user:{userId:req.body.userId,username:req.body.username,profilePic:req.body.profilePic}
    }
    )
})

app.get('/admin/protected',adminAuth,(req,res)=>{
    res.json({success:true,message:'You are authenticated as admin.',
        user:{email:req.user.email,role:req.user.role}
    }
    )
})

app.use('/api/',userRouter);
app.use('/api/admin/',productRouter);
app.use('/api/order/',orderRouter);



