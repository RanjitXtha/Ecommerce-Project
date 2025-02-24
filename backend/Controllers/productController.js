const productSchema  = require('../Schema/productSchema');
// const fs = require("fs");
// const path = require("path");

const addProduct = async (req,res)=>{
    const {title , description , price , category , 
        tags , sizes , colors , trending , discount,
        stock , information
    } = req.body;
    

    const parsedTags = JSON.parse(tags);
    const parsedSizes = JSON.parse(sizes);
    const parsedColors = JSON.parse(colors);
    const parsedInformation = JSON.parse(information);
    
    const imagePaths = req.files.map((file) => file.path);
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

const updateProduct = async (req,res)=>{
    console.log(req.body);
    const { _id, title, category, price, discount, stock } = req.body;

    try {
        const updatedProduct = await productSchema.findByIdAndUpdate(
            _id,
            { title, category, price, discount, stock },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const removeProduct = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    console.log("received");

    try {
        const deletedProduct = await productSchema.findByIdAndDelete(id);
        console.log(deletedProduct);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }


        res.json({ message: "Product and associated images deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {addProduct , updateProduct , getProductList , removeProduct};

