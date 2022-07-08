// 添加到购物车
module.exports = function (req, res) {
  // 获取ID
  var { id } = req.query;
  // 获取session里的信息
  var { shoppingCart } = req.session;

  // 查看是否已经有这个商品 有就+1
  var goods = shoppingCart.find((value) => value.id === id);
  if (goods) {
    goods.num++;
  } else {
    // 如果没有 就生成一个对象加入进去
    var obj = {
      id,
      num: 1,
    };
    shoppingCart.push(obj);
  }

  console.log(shoppingCart);

  res.send({
    error: 0,
    data: "商品添加成功",
    message: "操作成功",
  });
};
