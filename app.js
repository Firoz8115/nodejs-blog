const express = require('express');
require('dotenv').config();
const app = express();
const expressLayout =require('express-ejs-layouts');
const mongoose = require('mongoose');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine','ejs');

app.use('/', require('./server/routes/main'));



app.listen(5000, async()=>{
    console.log('This server is running at http://localhost5000');
    await connectdb();
});







const connectdb = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("db is connected succesfully");
    } catch (error) {
        console.log("db is not connected");
        console.log(error.message);
        process.exit(1);
    }
};





const productsSchema = new mongoose.Schema({
    title:String,
    //price:Number,
    description:String,
    createdAt:{
      type:Date, 
      default:Date.now
    },
  });
  
  const Product = mongoose.model("Product",productsSchema);
  






