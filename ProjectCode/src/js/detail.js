$(function () {
    // 1 从URL中获取商品id
    let queryString = location.search.slice(1);
    // 2 将queryString转为对象 
    let obj = {};
    // a=1&b=2&c=3 
    // ["a=1", "b=2", "c=3"]
    let arr = queryString.split("&");
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].split("=")[0]
        var value = arr[i].split("=")[1]
        obj[key] = value;
    }
    // 3 获取里面的id
    var id = obj.id;


    // 根据id获取单条数据
    $.get("/lession05/getDataById", { id }, function (data) {
        // 渲染商品详情
        $("#panel").html(`
            <div class="col-4">
                <div id="fdj" class="fdj">
                    <img draggable="false" src="${data.data.goods_small_logo}" alt="">
                    <div id="box" class="box">
                    </div>
                    <div id="big" class="big">
                        <img id="bigImg" src="${data.data.goods_big_logo}" alt="">
                    </div>
                </div>
            </div>
            <div class="col-6 infos">
                <h3>${data.data.goods_name}</h3>
                <div class="p-3 bg-secondary">
                    <span class="text-white">京东价:</span><span class="text-danger">¥${data.data.goods_price}</span>
                </div>
                <button type="button" id="addBtn" class="btn btn-lg btn-danger" >加入购物车</button>
            </div>
            <div class="ad col-2">
                看了又看
            </div> 
        `);


        // 加入购物车
        var $addBtn = $("#addBtn");
        $addBtn.click(function() {
            $.get("/lession05/addToCart", {id}, function(data) {
                console.log(data);
            })
        })


        // 放大镜相关js
        var box = document.getElementById("box");
        var fdj = document.getElementById("fdj");
        var big = document.getElementById("big")
        var bigImg = document.getElementById("bigImg");
        var r = 348 / 800;
        fdj.onmouseenter = function () {
            box.style.display = "block";
            big.style.display = "block"
        }
        fdj.onmouseleave = function () {
            box.style.display = "none";
            big.style.display = "none"
        }
        fdj.onmousemove = function (e) {
            var pageX = e.pageX;
            var pageY = e.pageY;
            var left = offset(fdj).left;
            var top = offset(fdj).top;

            var x = pageX - left;
            var y = pageY - top;

            var x1 = x - box.clientWidth / 2
            var y1 = y - box.clientHeight / 2

            if (x1 < 0) {
                x1 = 0;
            }
            if (x1 > fdj.clientWidth - box.clientWidth) {
                x1 = fdj.clientWidth - box.clientWidth
            }
            if (y1 < 0) {
                y1 = 0;
            }
            if (y1 > fdj.clientHeight - box.clientHeight) {
                y1 = fdj.clientHeight - box.clientHeight
            }

            box.style.left = x1 + "px";
            box.style.top = y1 + "px";

            bigImg.style.left = -x1 / r + "px";
            bigImg.style.top = -y1 / r + "px";
        }

        function offset(dom) {
            var left = 0;
            var top = 0;
            while (dom != document.body) {
                left += dom.offsetLeft + dom.clientLeft;
                top += dom.offsetTop + dom.clientTop;
                dom = dom.offsetParent;
            }
            return {
                left: left,
                top: top
            }
        }

    })


})