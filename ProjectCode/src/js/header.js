// 页面加载完成后执行此函数
$(function () {

    // 发送ajax请求，获取头部页面结构
    $.get("/template/header.html", function (data) {
        $("#header").html(data);


        /* // 获取本地存储
        var username = localStorage.getItem("username");
        if (username) {
            console.log("已登录");
            $("#willChange").html(`<a href="">${username}</a><a href="" class="exit">&ensp;退出</a>`);
            $("#profile").attr("src", "/imgs/profile.jpg");
        } else {
            console.log("未登录");
        } */


        // 发送请求验证登录
        $.get('/lession01/checkLogin', function (data) {
            if (data.error) {
                // 未登录or已超时
                localStorage.removeItem("username");
            }
            // 获取本地存储
            var username = localStorage.getItem("username");
            if (username) {
                console.log("已登录");
                $("#willChange").html(`<a href="">${username}</a><a href="" class="exit">&ensp;退出</a>`);
                $("#profile").attr("src", "/imgs/profile.jpg");
            } else {
                console.log("未登录");
            }
        })

    })


    // 发送退出请求
    $('#header').on('click', '.exit', function () {
        $.get('/lession01/exit', function (data) {
            console.log(data);
            if (data.error) {
                // 清空本地存储 刷新页面
                localStorage.removeItem("username");
                location.reload();
                pxmu.success("已退出");
            } else {
                pxmu.failed("退出失败！");
            }
        })
    })

});

