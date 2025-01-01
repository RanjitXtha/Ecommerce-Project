const mongoose = require('mongoose');

const productSchema = new  mongoose.Schema({
 name:{type:String , required:true},
 description: {type:String , required:true},
 price:{type:Number , required:true},
 image:{type:String , required:true},
 category:{type:Array , required:true},
 sizes: {type:Array , required:true},
 newArrival:{type:Boolean , required:true},
 date: {type: Date, default: Date.now }
})

module.exports = mongoose.model("productSchema", productSchema)