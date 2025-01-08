const {addOrder , getAllOrder , getUserOrder} = require('../Controllers/orderController');
const express = require('express');
const orderRouter = express.Router();

const authUser = require('../Middleware/auth');

orderRouter.post('/addOrder',addOrder);
orderRouter.get('/getAllOrders',getAllOrder);
orderRouter.get('/:user/getOrder',getUserOrder);

module.exports = orderRouter;