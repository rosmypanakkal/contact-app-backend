// node + monoDB connection

// import mongoose
const mongoose =require('mongoose')

// connection string
mongoose.connect('mongodb://localhost:27017/ContactApp') 

// create a model
const contactuser = mongoose.model('contactuser',{
    id:String,
    name:String,
    username:String,
    phone:String,
    address:String,
    email:String,
    pincode:String
})


module.exports={
    contactuser
}