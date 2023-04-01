const mongoose = require('mongoose');
require('colors')


const DB = "mongodb+srv://ibrahimafzal:ibn00rnakryr@cluster0.qd5rsos.mongodb.net/MERN-App?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>console.log('data base connected'.brightCyan)).catch((error) => console.log("error" + error.message))
// cyan is the color, see the console in command prompt