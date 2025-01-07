const productSchema  = require('../Schema/productSchema');

const addProduct = async (req,res)=>{
    console.log("reccieved")
    const {title , description , price , category , 
        tags , sizes , colors , trending , discount,
        stock , information
    } = req.body;
    

    const parsedTags = JSON.parse(tags);
    const parsedSizes = JSON.parse(sizes);
    const parsedColors = JSON.parse(colors);
    const parsedInformation = JSON.parse(information);
    
    console.log(req.body);
    //console.log(req.files);
    const imagePaths = req.files.map((file) => file.filename);
try{
    const newProduct = new productSchema({
        title, description ,price,category,tags:parsedTags,sizes:parsedSizes,
        colors:parsedColors,image:imagePaths , stock, trending , discount,information:parsedInformation
    })

    await newProduct.save();

    res.status(201).json({
        success: true,
        message: "Product added successfully!",
      });
    } catch (err) {
        //console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
      }
}
 
const getProductList = async (req,res)=>{
   try{
    const productList = await productSchema.find();
    if(!productList){
        res.json({success:false , message:'Products Not found'});

    }   
    res.json({success:true,productList});
   }catch(error){
    res.json({success:false , message:error})
   }
}

const getProduct = async (req,res)=>{
    
}

const removeProduct = async (req,res)=>{
    
}

module.exports = {addProduct , getProduct , getProductList , removeProduct};

