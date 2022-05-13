const Post = require("../models/postSchema")
const slugify = require("slugify");


exports.create = (req,res)=>{
    const {title,content,user} = req.body;
    const slug = slugify(title);

switch(true){
    case !title:
        return res.status(400).json({error:"Title is Required"});
    break;
    case !content:
        return res.status(400).json({error:"Content is Required"});
    break;
}

// const user = "admin";

console.log(title,content,user);

// res.json({title})

Post.create({title,content,user,slug},(err,post)=>{
    if(err){
        // console.log("this is Error", err);
   res.status(400).json({error:"Duplicate Post. Try another title"})
    }
    res.json(post)
})

}


exports.getAll = ()=>{
    
}