var readData = require("../../utils/readData");

// 获取所有数据
module.exports = function (req, res) {
    var json = readData();
    console.log(json);
    res.send({
        error: 0,
        data: json,
        message: "操作成功"
    });
};
