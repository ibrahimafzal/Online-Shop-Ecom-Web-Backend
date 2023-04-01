const express = require('express');
const { addorderItem, getOrderById, updateOrderToPaid } = require('../controllers/orderController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

// create new order
router.route("/orders").post(protect, addorderItem) //protect is liye use kr rhy hain ku k hm sirf authenticated user ko e order place krwana chahty hain


// Get order by Id //
router.route("/orders/:id").get(protect, getOrderById)

// update order //
router.route('/:id/pay').put(protect, updateOrderToPaid)

module.exports = router;