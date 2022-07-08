var readData = require("../../utils/readData");

// 根据页码与数量获取数据
module.exports = function (req, res) {
    var {page, count} = req.query;
   
    var arr = readData();
    var goods = arr.slice(+page * count, (+page+1) * count);
    console.log(goods.length, page, count);
    res.send({
        error: 0,
        data: goods,
        message:"操作成功"
    });
};
