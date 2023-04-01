const Product = require('../models/productSchema')
const asyncHandler = require('express-async-handler');


// fetch all prpducts
const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products)
});


// fetch single product
const getSingleProduct = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message:"Product not found."})
    }
});

module.exports = {getProducts,getSingleProduct}