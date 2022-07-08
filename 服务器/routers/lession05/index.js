let express = require("express");

let router = new express.Router();

router.get("/getAllData", require("./getAllData"));
router.get("/getDataById", require("./getDataById"));
router.get("/getList", require("./getList"));
router.get("/addToCart", require("./addToCart"));
router.get("/minusCart", require("./minusCart"));
router.get("/checkLogin", require("./checkLogin"));
router.get("/clearCart", require("./clearCart"));
router.get("/deleteCart", require("./deleteCart"));
router.get("/exit", require("./exit"));
router.get("/getShoppingCart", require("./getShoppingCart"));
router.post("/login", require("./login"));
module.exports = router;
