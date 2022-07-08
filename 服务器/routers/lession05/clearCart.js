// 添加到购物车
module.exports = function (req, res) {
     
     req.session.shoppingCart = [];

    res.send({
        error: 0,
        data: "",
        message: "清空购物车成功"
    })
};
