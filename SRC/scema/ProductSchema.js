const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: [true, "Product name is required"],
        minLength: [5, "Product name must be at least 5 character"],
        trim: true
    },
    description: {
        type: String,
        minLength: [5, "Product description mus"]
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, "product price is required"],
    },
    category: {
        type: String,
        enum: ['veg', 'non-veg', 'drinks', 'sides'],
        default: "veg",
    },
    inStock: {
        type: Boolean,
        required: [true, "In status is required"],
        default: true
    },
    discount: {

    }
}, {
    timestamp: true
})
const Product = mongoose.model('Product', productSchema);
module.exports = Product;