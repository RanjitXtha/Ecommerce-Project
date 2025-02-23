const {addProduct , updateProduct , getProductList , removeProduct} = require('../Controllers/productController');
const express = require('express');
const upload = require('../Middleware/multer');
const adminAuth = require('../Middleware/adminAuth');
const productRouter = express.Router();

productRouter.post('/add-product',adminAuth,upload.array('images', 4),addProduct);
productRouter.delete('/remove-product/:id',adminAuth,removeProduct);
productRouter.get('/get-all-product',getProductList);
productRouter.put('/update-product',adminAuth,updateProduct);

module.exports = productRouter;
