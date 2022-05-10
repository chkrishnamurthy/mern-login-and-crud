const express = require('express');
const router = express.Router();
const {create} = require("../controllers/post_control")


router.get("/post",create);

module.exports = router;