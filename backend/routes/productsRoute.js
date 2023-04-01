const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productsController')


const router = express.Router();
//make route for all products.
router.route('/products').get(getProducts)

// make route for single product.
router.route('/products/:id').get(getSingleProduct);

module.exports = router;