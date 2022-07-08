module.exports = function (req, res) {
    var { username, password } = req.body;
    if (!username) {
      res.status(403).send({ error: 1, data: "用户名未填写", message: "请求失败" });
      return;
    }
    if (!password) {
      res.status(403).send({ error: 2, data: "密码未填写", message: "请求失败" });
      return;
    }
    
    req.session.name = username;
    req.session.shoppingCart = [];
    res.json({
      error: 0,
      data: "登录成功",
      message: "请求成功",
    });
  };
  