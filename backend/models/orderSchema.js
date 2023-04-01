const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({ //kn sy User ny order dia ha us k liye hmen order aur User k drmayan relation bnana hoga.
user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: { //kn sa product order list main add hua ha, relationship b/w order & product
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalcode: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    paymentMethod: {
        type: String,
        // required:true
    },
    paymentResult: {
        id: { type: Number },
        status: { type: String },
        update_time: { type: String },
        email: { type: String }
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: { //yh check krny k liye k payment hui ha k nae
        type: Boolean,
        required: true,
        default: false //bydefault false rkha mtlb payment nae hui
    },
    paidAt: { //mtlb kb user ny pay kia tha
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, { timeStamps: true })

const Order = mongoose.model('Order', orderSchema)
module.exports = Order;