// 页面加载完成后执行此函数
$(function () {
    // 点击登录按钮
    $("#loginBtn").click(function () {
        // 获取用户名和密码
        var username = $("#usernameInput").val();
        var password = $("#passwordInput").val();

        pxmu.loading("信息提交中，请稍后...");

        // 提交信息
        $.post("/lession05/login", { username, password }, function (data) {
            console.log(data);
            pxmu.closeload();
            if(!data.error){
                pxmu.success("登录成功！");
                // 在本地存储里记录用户名
                localStorage.setItem("username", username);
                // 更改头像图片
                $("#profile").attr("src", "/imgs/profile.jpg");
                // 半秒后跳转到主页
                setTimeout(() => {
                    location.href = "../index.html";
                }, 500);
            }else{
                pxmu.failed("登录失败！");
            }
        })
    })
});

