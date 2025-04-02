const express = require('express')
const { buyProduct } = require('../controllers/productController')

const productRouter = express.Router()

productRouter.get('/:id', buyProduct)
module.exports = productRouter;