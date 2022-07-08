let express = require("express");

let router = new express.Router();

router.post("/getOrderList", require("./getOrderList"));
router.post("/getDetails", require("./getDetails"));

module.exports = router;
