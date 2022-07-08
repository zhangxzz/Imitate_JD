module.exports = function (req, res) {
    var random = parseInt(Math.random() * 5) + 2;

    setTimeout(function() {
        res.json({
            error: 0,
            data: {
                userId: "76BA988QE",
                username: "A1234567",
                password: "greedisgood",
                registDate: 1645087034758,
                sex: "male",
                birthDay: 1009987200000
            },
            message: "请求成功"
        })
    }, random * 1000)
};  
