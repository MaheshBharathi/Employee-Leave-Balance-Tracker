// const mongoose=require('mongoose')
// const userSchema=mongoose.Schema({
//     username:String,
//     email:String,
//     password:String
// })
// const userModel=new mongoose.model('users',userSchema)
// module.exports=userModel
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

// Export the User model
module.exports = mongoose.model('User', userSchema);
