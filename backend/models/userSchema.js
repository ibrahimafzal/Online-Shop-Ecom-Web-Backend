const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    isAdmin: { // "isAdmin" is liye banaya ku k hmen yh check krna ha k aya k user jo login ho raha ha,kya wo user ha ya admin.
        type:Boolean,
        required:true,
        default:false  //ku k hr admin "user" nae ho skta is liye bydefault isy false rakhain gy
    }
}, {timeStamps: true}) //timeStamps is liye likha ta k yh pta chal sky k user kis time login hua


userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

// middleware for password
userSchema.pre('save', async function(next){ //here next is middleware
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema) //here "Users" is collection name
module.exports = User;