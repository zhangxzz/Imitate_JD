// 添加到购物车
module.exports = function (req, res) {
    // 获取ID
    var {id} = req.query;
    // 获取session里的信息
    var {shoppingCart} = req.session;
    // 根据传递的ID寻找购物车中的信息
    var idx = shoppingCart.findIndex(value => value.id === id);
    // 如果没有
    if (idx === -1) {
        res.send({
            error: 1,
            data: "",
            message: "用户没有该商品"
        })
        return;
    }
    shoppingCart.splice(idx, 1);

    res.send({
        error: 0,
        data: "",
        message: "删除商品成功"
    })
};
