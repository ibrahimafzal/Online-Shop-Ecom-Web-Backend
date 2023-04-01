const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {  //kis ny review dia ha uska name
        type: String,
        required: true
    },
    rating: { //kya rating user ny dia ha
        type: Number,
        required: true
    },
    comment: { //kis ny comment dia ha
        type: String,
        requied: true
    }
}, { timeStamps: true })

const productSchema = mongoose.Schema({
    // yahan hmen products aur user k drmayan relationship maintain krna ha, mtlb hmen yh dekhna ha k yh jo product create hua ha isy kis admin/user ny create kia ha
    user: { //ku k hm user sy data ly rhy hain mtlb user ki id ly rhy hain is liye yahan User likhen gy
        type: mongoose.Schema.Types.ObjectId, //ObjectId sy murad hm User ki id capture kren gy aur yh id bydefault mongodb ki trf sy milti ha schema k object ko, so UserSchema ka jo object hm ny bnaya ha UserSchema.js main wahan sy yeh id capture kr rahy hain User ki aur productSchema main store kr rhy hain, mtlb user aur product k beech relationship build kr rhy hain ta k pta chal sky k yh product kis user/admin ny create kia ha
        required: true,
        ref: 'User' //yeh 'User' mtlb model ka naam ha, yh user wo user ha jo userSchema ki 23 line pr mojood ha, isi reference k thorugh hm User ki id ko capture kr paa rhy hain
    },
    name: {
        type: String,
        requied: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        requied: true,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [ //reviews hmary pas aik array hoga ku k is k andr hmen aik dusra schema banana ha
        reviewSchema
    ],
    rating: {
        type: Number,
        required: true
    },
    numReviews: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    }
}, { timeStamps: true });

const Product = mongoose.model('Product', productSchema)
module.exports = Product;