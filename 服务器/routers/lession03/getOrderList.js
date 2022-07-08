module.exports = function (req, res) {
  var random = parseInt(Math.random() * 5) + 2;
  setTimeout(function () {
    var { username } = req.body;
    if (!username) {
      res.status(403).send({
        error: 1,
        data: "",
        message: "参数不足",
      });
      return;
    }

    res.status(200).send({
      error: 0,
      data: "202202124455",
      message: "请求成功",
    });
  }, random * 1000);
};
