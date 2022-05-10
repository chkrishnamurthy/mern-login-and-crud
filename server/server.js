const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post')
require("dotenv").config();

const app = express();
//db
// mongoose
// .connect(process.env.DATABASE,{})
// .then(()=>console.log("DB Connected"))
// .catch((err)=>console.log(err));
// const url = "mongodb+srv://mern:krishna123@mern-crud-with-login.pu4s8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true,useUnifiedTopology: true }).then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));



//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());





//route middleware

app.use('/api',postRoutes)

const port = process.env.PORT || 8000; 

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}) 