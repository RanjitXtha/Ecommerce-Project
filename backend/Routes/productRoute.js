const {addProduct , getProduct , getProductList , removeProduct} = require('../Controllers/productController');
const express = require('express');
const upload = require('../Middleware/multer');
const adminAuth = require('../Middleware/adminAuth');
const productRouter = express.Router();

productRouter.post('/add-product',adminAuth,upload.array('images', 4),addProduct);
productRouter.post('/remove-product',adminAuth,removeProduct);
productRouter.get('/get-all-product',getProductList);
productRouter.get('/get-product',getProduct);

module.exports = productRouter;
