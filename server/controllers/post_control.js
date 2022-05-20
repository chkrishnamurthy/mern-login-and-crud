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

Post.create({title,content,user,slug},(err,post)=>{
    if(err){
        // console.log("this is Error", err);
   res.status(400).json({error:"Duplicate Post. Try another title"})
    }
    res.json(post)
})

}


exports.list = async (req,res)=>{
   const data =  await Post.find({}).limit(10).sort({createdAt:-1});
    res.json({data:data});
}

exports.read = (req,res)=>{
    const {slug} = req.params;

    Post.findOne({slug})
    .exec((err,post)=>{
        if(err) console.log(err);
        res.json(post);
    })

    console.log("slug",slug);
    // res.json({data:req.params})
}

exports.update = (req,res)=>{
    const {slug} = req.params;

    const {title,content,user} = req.body;

    Post.findOneAndUpdate({slug},{title,content,user},{new:true })
    .exec((err,post)=>{
        if(err)console.log(err);
        res.json(post)
    })

}

exports.remove = (req,res)=>{
    const {slug} = req.params;
     Post.deleteOne({slug})
    .exec((err,post)=>{
        if(err) console.log(err);
        res.json(post);
    })

}