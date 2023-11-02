// const mongoose = require("mongoose")
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://veerasaigadi:Veera12345@sale.ki8xxba.mongodb.net/Ecommerce?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://veerasaigadi:Veera12345@Ecommerce.4tsoezw.mongodb.net/Sale?retryWrites=true&w=majority')
.then(()=>{
    console.log("Mongodb connected");
})
.catch(()=>{
    console.log('Failed');
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model("collection",newSchema)//model is a keyword used to define  a collection.

// module.exports=collection
