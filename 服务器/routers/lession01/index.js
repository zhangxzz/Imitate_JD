let express = require("express");

let router = new express.Router();

router.get("/demo", require("./demo"));
router.get("/getUserInfo", require("./getUserInfo"));
router.post("/regist", require("./regist"));
router.post("/login", require("./login"));
router.get("/checkLogin", require("./checkLogin"));
router.get("/exit", require("./exit"));

module.exports = router;
