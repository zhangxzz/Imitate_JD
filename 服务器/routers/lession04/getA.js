module.exports = function (req, res) {
  

    res.status(200).send("a(" + JSON.stringify({
        error: 0,
        data: [
            {name: "洗衣机", price: 5500, num: 1},
            {name: "JavaScript从入门到放弃", price: 25, num: 1},
            {name: "铁板烧", price: 5.5, num: 10},
        ],
        message: "请求成功"
    }) + ")")
};
