const express = require('express');
const router = express.Router();
// const {create,list,read,update,remove} = require("../controllers/post_control")

const {login} = require('../controllers/auth');


router.post("/login",login)

module.exports = router;