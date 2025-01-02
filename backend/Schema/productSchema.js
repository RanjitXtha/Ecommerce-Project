const mongoose = require('mongoose');

const productSchema = new  mongoose.Schema({
 title:{type:String , required:true},
 description: {type:String , required:true},
 price:{type:Number , required:true},
 image:{type:Array , required:true,default:[]},
 category:{type:String , required:true},
 tags:{type:Array , required:true,default:[]},
 sizes: {type:Array , required:true,default:[]},
 colors: {type:Array , required:true,default:[]},
 trending:{type:Boolean , required:true},
 discount:{type:Number,default:0},
 date: {type: Date, default: Date.now },
 rating:{type:Number,default:0},
 reviews:{type:Number,default:0},
 stock:{type:Number,default:0,required:true},
 information:{type:Object,required:true},
})

module.exports = mongoose.model("productSchema", productSchema)