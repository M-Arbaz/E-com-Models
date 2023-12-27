const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const Buyer = require('./model/Buyer');
const Seller = require('./model/Seller');
const Product = require('./model/Product');
const Order = require("./model/Order");
app.use(cors())
app.use(express.json())
{
    mongoose.connect('mongodb+srv://admin:admin@cluster0.ezsgqkf.mongodb.net/Ecom')
      .then(() => {
        console.log('connection succesful');
      })
      .catch(error => {
        console.log('connections failed', error);
      });
  }
  app.post("/user",(req,res)=>{
    const data= new Buyer({
      name:"Arbaz irfan",email:"hy there",password:"arbaz"
    })
    console.log(data)
    data.save()
  })
  app.post("/product",(req,res)=>{
    const prod = new Product({
      name:"Pump", description:"nothing",brand:"node",
     })
     prod.save()
  })
  app.post("/seller",(req,res)=>{
    const seller = new Seller({
      name:"Arbaz", email:"nothing",password:"node",
     })
     seller.save();
  })
  app.post("/order",(req,res)=>{
    const order = new Order({
      time:Date.now(),
      Product_qty:3,
      price:170,
      get payment(){
        return this.Product_qty*this.price;
      }
    })
    order.save()
  })


app.listen(3001,()=>{console.log('listening on 3001')})