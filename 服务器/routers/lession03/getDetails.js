module.exports = function (req, res) {
  var random = parseInt(Math.random() * 5) + 2;
  setTimeout(function () {
    var { orderId } = req.body;
    if (!orderId) {
      res.status(403).send({
        error: 1,
        data: "",
        message: "参数不足",
      });
      return;
    }

    res.status(200).send({
      error: 0,
      data: [
        { name: "洗衣机", price: 5500, num: 1 },
        { name: "JavaScript从入门到放弃", price: 25, num: 1 },
        { name: "铁板烧", price: 5.5, num: 10 },
      ],
      message: "请求成功",
    });
  }, random * 1000);
};
