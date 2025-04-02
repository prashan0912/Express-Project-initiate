
const express = require('express')

const { orderController } = require('../controllers/orderController')

const orderRouter = express.Router()

orderRouter.get('/:id', orderController)
module.exports = orderRouter;