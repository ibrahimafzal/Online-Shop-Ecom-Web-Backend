//is file ka hmary backend server sy koi relation nae hoga yh bs data ko export krny k kam aye gi.
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/userSchema')
const Product = require('./models/productSchema')
const Order = require('./models/orderSchema')
// upar hm ny sari schema files ko aur is k ilawa users aur products ki dummy file ko import kia ha
require('./mongoConnection/conn')
require('colors')

dotenv.config();

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        const sampleData = products.map((product) => {
            return { ...product, user: adminUser }
        });
        await Product.insertMany(sampleData)
        console.log("Data imported to amongoDB".green.inverse);
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }
};
const dataDestroy = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()   
        console.log("Data Deleted from Mongodb".green.inverse); 
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1) 
    }
};

if(process.argv[2] === "-d"){
    dataDestroy()
}else{
    importData()
}