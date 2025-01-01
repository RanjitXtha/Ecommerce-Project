const {addProduct , getProduct , getProductList , removeProduct} = require('../Controllers/productController');
const express = require('express');
const upload = require('../Middleware/multer');
const productRouter = express.Router();

productRouter.post('/add-product',upload.fields([
    {name:'image1',maxCount:1},
    {name:'image2',maxCount:1},
    {name:'image3',maxCount:1},
    {name:'image4',maxCount:1}

]),addProduct);
productRouter.post('/remove-product',removeProduct);
productRouter.post('/get-all-product',getProductList);
productRouter.post('/get-product',getProduct);

module.exports = productRouter;
