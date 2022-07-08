// 页面加载完成后执行此函数
$(function () {
    let $username = $("#usernameInput");
    let $password = $("#passwordInput");
    let $birthDay = $("#birthDay");
    // let $sex = $("input[name='sex']");
    let $submit = $("#submit");

    // 点击注册按钮
    $submit.click(() => {
        // 获取它们的值
        let username = $username.val();
        let password = $password.val();
        let birthDay = $birthDay.val();
        // 获取性别  :checked是jQuery中自定义的筛选器
        let sex = $("input[name='sex']:checked").val()

        console.log(username, password, birthDay, sex)

        // 定义参数对象
        var obj = {
            username,
            password,
            sex,
            birthDay
        };
        pxmu.loading("注册中，请稍候...")
        // 发送请求实现注册
        $.post('/lession01/regist', obj, function(data) {
            pxmu.closeload();
            if (!data.error) {
                pxmu.success("注册成功")
                setTimeout(function() {
                    location.href = './login.html';
                }, 1000)
            } else {
                pxmu.failed('注册失败')
            }
        })
    })
});