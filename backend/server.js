
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const userRouter = require('./Routes/userRoute');
const productRouter = require('./Routes/productRoute');
const authUser  = require('./Middleware/auth');
const adminAuth = require('./Middleware/adminAuth');


const dbURL = 'mongodb+srv://alienshooter:alienshooterpassword_123@cluster0.rbry7.mongodb.net/ecommerceSite?retryWrites=true&w=majority&appName=Cluster0';
const app = express();
app.use(cors());
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
app.use('/api/',productRouter);



