var readData = require("../../utils/readData");
// 添加到购物车
module.exports = function (req, res) {
    
    // 获取session里的购物车信息
    var {shoppingCart} = req.session;

    // 获取所有商品信息
    var goodsArr = readData();

    var arr = shoppingCart.map(function(value) {
        return {
            ...goodsArr.find(val => value.id === val.goods_id),
            num: value.num
        }
    })


    res.send({
        error: 0,
        data: arr,
        message: "操作成功"
    })
};
