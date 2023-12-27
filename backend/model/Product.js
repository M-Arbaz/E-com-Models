const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");
const seller = require('./Seller');
const buyer = require('./Buyer');

const produc = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  brand: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  stock:{
    type:Number,
    require:true
  },
  image_url: {
    type: String,
    require: true
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'seller'
  },
  buyer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'buyer'
  }
});

const product = mongoose.model("product", produc);
module.exports = product;
