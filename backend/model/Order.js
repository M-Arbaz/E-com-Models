const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");
const product = require("./Product");
const seller = require("./Seller");
const buyer = require("./Buyer");
const orde = new mongoose.Schema({
    prodcut_id:{
        type:ObjectId,
        ref:"product"
    },
    product_name:{
        type:String,
        ref:'product'
    },
    price:{
        type:Number,
        ref:"product"
    },
    Product_qty:{
     type:Number,
    },
    seller_id:{
        type:ObjectId,
        ref:"seller"
    },
    buyer_id:{
        type:ObjectId,
        ref:"buyer"
    },
    payment:{
        type:Number,
    },
    time:{
        type:Date,
    }
})
const order = mongoose.model("order",orde)
module.exports = order;