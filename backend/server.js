const express = require('express');
const products = require('./data/products');
const cors = require('cors');
const dotenv = require('dotenv');
require('colors')
const mongoose = require('mongoose')
require("./mongoConnection/conn");
const productRoutes = require('./routes/productsRoute')
const userRoutes = require('./routes/UsersRoute')
const orderRoutes = require('./routes/orderRoute')

const app = express();

// dotenv config
dotenv.config();

app.use(cors());


//middleware for bodyparser
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>welcome to Node server</h1>`)
});

//product route
app.use(productRoutes)

//user route
app.use(userRoutes)

//order route //
app.use(orderRoutes)

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
    // here "inverse" sets the white background of this console in command propmt. see above require('colors)
    console.log(`Server running in ${process.env.NODE_ENV} Made on Port ${process.env.PORT}`.inverse);
})
