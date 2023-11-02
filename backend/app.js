import express from "express";
// const express  = require{'express'};
import mongoose from "mongoose";
// const mongoose = require{'mongoose'};
import bodyParser from "body-parser";           //used for database connection
import collection from './mongo.js'
import cors from 'cors';                        //used for network issues 

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{//'/' for login page

})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const email_check=await collection.findOne({email:email});
        // const password_check=await collection.findOne({password:password});

        if(email_check){
            if(email_check.password === password){
                res.json('success')
            }else{
                res.json('invalid password')
            }
        }
        else{
            res.json('not exist')
        }

    }
    catch(e){
        res.json("fail")
    }
})


app.post("/signup",async(req,res)=>{
    const{email,password}=req.body //getting the data email and password
    console.log(email,'---',password)
    const data={
        email:email,
        password:password
    }
    //checking email already exist or not
    // try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            collection.insertMany([data]).then(val => {
                console.log(val)
            }).catch(err => console.log(err))   //storing the email of new year in mongodb
        }
})

app.listen(8000,()=>{
    console.log("Port connected");
})
