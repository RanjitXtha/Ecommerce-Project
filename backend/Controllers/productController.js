const productSchema  = require('../Schema/productSchema');
const addProduct = async (req,res)=>{
    console.log("reccieved")
    const {title , description , price , category , 
        tags , sizes , colors , trending , discount,
        stock , information
    } = req.body;
    console.log(req.body)
    console.log(req.files);
    const imagePaths = req.files.map((file) => file.filename);
    
    // console.log(title + description + price + category + 
    //     tags + sizes + colors + trending + discount +
    //     stock + information);
    //     console.log(imagePaths);
try{
    const newProduct = new productSchema({
        title, description ,price,category,tags,sizes,
        colors,image:imagePaths , stock, trending , discount,information
    })

    await newProduct.save();
    res.status(201).json({
        success: true,
        message: "Product added successfully!",
      });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
      }
}
 
const getProductList = async (req,res)=>{
    
}

const getProduct = async (req,res)=>{
    
}

const removeProduct = async (req,res)=>{
    
}

module.exports = {addProduct , getProduct , getProductList , removeProduct};

