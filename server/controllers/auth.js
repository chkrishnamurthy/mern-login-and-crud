const Post = require("../models/postSchema")
const slugify = require("slugify");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.login = (req,res)=>{
    const {name,password} = req.body;
    console.log( req.body.name);
    console.log(name,"password");
    if(password == process.env.PASSWORD ){
            const token = jwt.sign({name},process.env.JWT_SECRET,{expiresIn:"1d"});
            return res.json({
                name,
                token
            })
    }else{
        return res.status(400).json({
            error:"error in password and name"
        })
    }
    // console.log(process.env.PASSWORD);
}