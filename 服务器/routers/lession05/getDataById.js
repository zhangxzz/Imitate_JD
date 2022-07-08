var readData = require("../../utils/readData");

// 根据商品ID获取数据
module.exports = function (req, res) {
    var {id} = req.query;
    console.log(id);
    var arr = readData();
    var goods = arr.find(value => value.goods_id === id)
    
    res.send({
        error: 0,
        data: goods,
        message:"操作成功"
    });
};
