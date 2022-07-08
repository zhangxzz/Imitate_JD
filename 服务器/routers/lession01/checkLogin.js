
module.exports = function (req, res) {

  if (req.session.name) {
    res.status(200).json({
      error: 0,
      data: "已登录",
      message: "请求成功",
    });
  } else{
    res.json({
      error: 1,
      data: "已超时",
      message: "请求成功",
    });
  }
};
