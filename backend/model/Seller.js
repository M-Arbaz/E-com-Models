const  mongoose  = require('mongoose')
const product= require('./Product')
const { ObjectId } = require('mongodb')
const selle= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
      type:String,
      require:true
    },
    shop_name:{
        type:String,
        require:true
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:product
    }
})
const seller = mongoose.model("seller",selle)
module.exports= seller