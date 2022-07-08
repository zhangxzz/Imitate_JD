module.exports = function (req, res) {
    var { username, password, birthDay } = req.body;
    if (!username) {
        res.status(403).send({ error: 1, data: "用户名未填写", message: "请求失败" });
        return;
    }
    if (!password) {
        res.status(403).send({ error: 2, data: "密码未填写", message: "请求失败" });
        return;
    }
    if (!birthDay) {
        res.status(403).send({ error: 3, data: "出生日期未填写", message: "请求失败" });
        return;
    }

    res.json(
        {
            error: 0,
            data: {
                username: "A1234567",
                password: "greedisgood",
                registDate: 1645087034758,
                sex: "male",
                birthDay: 1009987200000
            },
            message: "请求成功"
        }
    )
};
