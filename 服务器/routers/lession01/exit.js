module.exports = function (req, res) {
  /* res.status(200).json({
    error: 0,
    data: "退出成功",
    message: "请求成功",
  }); */
  
  if (req.session.username) {
    req.session.username = null;
    res.status(200).json({
      error: 0,
      data: "退出成功",
      message: "请求成功",
    });
  } else {
    res.status(200).json({
      error: 1,
      data: "你都没登录你退什么退！",
      message: "请求成功",
    });
  }
};
