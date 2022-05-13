const express = require('express');
const router = express.Router();
const {create,getAll} = require("../controllers/post_control")

// &w=majority
router.post("/post",create);
// router.get("/",getAll);


module.exports = router;