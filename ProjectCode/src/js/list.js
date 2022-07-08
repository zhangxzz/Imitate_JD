$(function () {
    // 发送请求获取单条数据
    function sendAjax(num) {
        $.get("/lession05/getList", { page: num, count: 32 }, function (data) {
            // 清空当前列表
            $("#list").empty();

            var str = "";
            data.data.forEach(function (value, index) {
                str += `<div class="card col-3">
                            <img src="${value.goods_small_logo}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">￥${value.goods_price}</h5>
                                <p class="card-text">${value.goods_name}</p>
                                <a href="/html/detail.html?id=${value.goods_id}" class="btn btn-danger">查看详情</a>
                            </div>
                        </div>`
            })
            $(str).appendTo("#list");
            $(window).scrollTop(0)
        })
    }

    
    sendAjax(0);
    history.replaceState(1, "", "/xunide#1")



    $('.page-test').page({
        leng: 23,//分页总数
        activeClass: 'activeA',
        clickBack: function (page) {
            // 点击数字 下一页 首页 末页的时候执行的代码
            console.log("当前是第" + page + "页");
            sendAjax(page - 1);
            // 解决方案1  人为的将第三个参数URL参数与真实路径统一
            // history.pushState(page, "", "/html/list.html")
            // 解决方案2  需要后端配置一个失败响应页面
            history.pushState(page, "", "/xunide#" + page);
        },
        back() {
            // 点击上一页的时候执行的代码
            history.back();
        }
    })



    window.onpopstate = function(e) {
        // e.state是pushState的第一个参数page
        console.log("触发了", e.state)
        sendAjax(e.state - 1);
        // 获取所有的数字按钮
        $(".pagingUl li").each(function() {
            console.log(this)
            $(this).children().removeClass("activeA")
            if ($(this).children().html() == e.state) {
                $(this).children().addClass("activeA")
            }
        })
    }


})



/* 
    pushState() 用于增加一个虚拟的历史记录
    replaceState() 用于替换当前的历史记录 
    给window添加了一个事件  window.onpopstate = function() {}  这个事件会在虚拟历史记录发生变化的时候触发
*/