let express = require("express");

let router = new express.Router();

router.get("/getA", require("./getA"));
router.get("/getB", require("./getB"));
router.get("/getC", require("./getC"));

module.exports = router;
