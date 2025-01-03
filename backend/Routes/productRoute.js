const {addProduct , getProduct , getProductList , removeProduct} = require('../Controllers/productController');
const express = require('express');
const upload = require('../Middleware/multer');
const adminAuth = require('../Middleware/adminAuth');
const productRouter = express.Router();

productRouter.post('/add-product',upload.array('images', 4),adminAuth,addProduct);
productRouter.post('/remove-product',adminAuth,removeProduct);
productRouter.post('/get-all-product',getProductList);
productRouter.post('/get-product',getProduct);

module.exports = productRouter;
