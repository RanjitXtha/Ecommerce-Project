const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,'Username Required'],
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required: [true, 'Email Required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
    },
    profilePic: {type:String},
    cart:{
        type:Object , default:{}
    }
},{timestamps:true,minimize:false}) //empty obj then we need  to use minimize else moongose will ignore empty obj.

module.exports = mongoose.model("userSchema",userSchema)