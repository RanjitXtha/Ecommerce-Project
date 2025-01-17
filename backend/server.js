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


const dbURL = process.env.DB_URL;
const app = express();
app.options('*', cors());
app.use(cors({
    origin: ["http://localhost:5173","https://ecommerce-project-ochre.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
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
        user:{email:req.body.email,role:req.body.role}
    }
    )
})

app.use('/api/',userRouter);
app.use('/api/admin/',productRouter);
app.use('/api/order/',orderRouter);



