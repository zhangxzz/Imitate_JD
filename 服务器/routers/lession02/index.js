let express = require("express");

let router = new express.Router();

router.get("/getStudentsName", require("./getStudentsName"));
router.get("/getImgsById", require("./getImgsById"));
;

module.exports = router;
