// 减少购物车商品数量
module.exports = function (req, res) {
    // 获取ID
    var { id } = req.query;
    // 获取session里的信息
    var { shoppingCart } = req.session;

    // 查看是否已经有这个商品 有就-1
    var goods = shoppingCart.find((value) => value.id === id);
    if (goods) {
        goods.num--;
    }
    if (goods.num < 0) {
        goods.num = 0;
    }

    res.send({
        error: 0,
        data: "商品删除成功",
        message: "操作成功",
    });
};
