const { default: mongoose } = require("mongoose");
const product= require('./Product')
const buye= new mongoose.Schema({
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
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:product
    }
})
const buyer = mongoose.model("buyer",buye);
module.exports= buyer;