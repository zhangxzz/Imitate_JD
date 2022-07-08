module.exports = function (req, res) {
    var callbackName = req.query.callback;
    console.log(callbackName)
    if (!callbackName) {
        res.status(403).send({
            error: 1,
            data: "",
            message: "未指定回调名称"
        })
        return;
    }
    res.status(200).send(`${callbackName}(${JSON.stringify({
        error: 0,
        data: "我是服务器B上的内容",
        message: "请求成功"
    })})`)
};
