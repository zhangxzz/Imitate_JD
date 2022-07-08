var fs = require("fs");
module.exports = function (req, res) {
    var id = req.query.id;
     
    if (!id) {
      res.status(403).send({
        error: 1,
        data: "",
        message: "没有携带数据"
      });
      return;
    }
    fs.readFile(__dirname + `../../../database/${id}.json`, function(error, data) {
      if (error) {
        res.status(403).send({
          error: 2,
          data: "",
          message: "没有更多数据"
        });
        return;
      }
      res.send({
        error: 0,
        data: JSON.parse(data.toString()),
        message: "请求成功"
      })
    })
};
