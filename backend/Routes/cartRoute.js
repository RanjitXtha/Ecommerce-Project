const {addToCart , deletefromCart , clearCart} = require('../Controllers/cartController');
const express = require('express');
const cartRouter = express.Router();

const authUser = require('../Middleware/auth');

cartRouter.post(':user/add',addToCart);
cartRouter.delete(':user/delete',deletefromCart);
cartRouter.delete(':user/clear',clearCart);