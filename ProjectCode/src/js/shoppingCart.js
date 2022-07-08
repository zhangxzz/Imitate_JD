$(function () {
    // 发送请求获取购物车的信息
    $.get("/lession05/getShoppingCart", function (data) {
        var str = '';

        data.data.forEach(value => {
            str += 
            `<tr>
                <td>
                    <input data-id="${value.goods_id}" type="checkbox">
                </td>
                <td title="${value.goods_name}">
                    ${value.goods_name}
                </td>
                <td>
                    <img src="${value.goods_small_logo}"
                        alt="">
                </td>
                <td>
                    ${value.goods_price}
                </td>
                <td>
                ${value.num}
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id=""
                            data-bs-toggle="dropdown" aria-expanded="false">
                            操作
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item plus" data-id="${value.goods_id}"  href="#">&plus;</a></li>
                            <li><a class="dropdown-item minus" data-id="${value.goods_id}"  href="#">&minus;</a></li>
                            <li><a class="dropdown-item del" data-id="${value.goods_id}"  href="#">&times;</a></li>
                        </ul>
                    </div>
                </td>
            </tr>`
        })
        $(str).appendTo("tbody")


        // 获取购物车中的数据
        let shoppingCart = data.data;
        // 获取元素添加功能
        // 1 全选功能
        let $allSelect = $("thead input");
        // 获取所有的tbody中的input
        let $goodsInput = $("tbody input");
        // 小tips: 操作元素的checked属性的时候 要使用prop方法
        // 当点击它的时候 有两种可能性1 全选 2取消
        $allSelect.change(function () {
            // console.log($(this).is(":checked"))
            // 获取全选按钮的状态
            let isChecked = $(this).prop("checked");
            // 同步商品input的状态
            $goodsInput.prop("checked", isChecked);

            // 如果全选
            if (isChecked) {
                // 给数组中的每一个对象人为添加一条属性  checked并设置为true
                shoppingCart.forEach(value => value.checked = true);
            } else {
                // 否则设置为false
                shoppingCart.forEach(value => value.checked = false);
            }

            var allPrice = computePrice();
        })


        // 单个商品的选中和取消事件
        $goodsInput.change(function () {
            // 当点击任何一件商品的勾选框的时候会执行这里的代码
            // 1 全选按钮的状态判定与修改
            var isAllChecked = true;
            $goodsInput.each(function (index, value) {
                if (!$(value).is(":checked")) {
                    // 有任何一个没有被选中 将 isAllChecked变量修改为false
                    isAllChecked = false;
                }
            })
            $allSelect.prop("checked", isAllChecked);


            // 2 获取商品信息
            var id = $(this).attr("data-id");
            console.log(id)

            // 根据商品id 拿到商品
            var obj = shoppingCart.find(value => value.goods_id === id);
            console.log(obj)
            obj.checked = !obj.checked;


            // 2 计算价格
            computePrice();
        })


        // 使用委托模式添加增加数量事件
        $("tbody").on("click", ".plus", function () {
            console.log("增加")
            // 1 发送增加商品的请求 给后端 
            // 2 请求回来之后 再根据情况 加1或者不变
            // 获取自定义属性 
            let id = $(this).data('id')   // 等价于   let id = $(this).attr("data-id")

            $.get("/lession05/addToCart", { id }, (data) => {
                if (!data.error) {
                    // 改变页面中的数量
                    var nowNum = $(this).parents("td").prev().html();  // 获取现在的数量
                    $(this).parents("td").prev().html(+nowNum + 1);// 改页面

                    // 改变数组中的数量
                    let obj = shoppingCart.find(value => value.goods_id == id);
                    obj.num++;

                    console.log(obj)

                    // 计算价格
                    computePrice();
                }
            })
        })

        $("tbody").on("click", ".minus", function () {
            console.log("减少")
            // 获取商品id
            let id = $(this).data('id');
            // 发送请求减少该商品的数量
            $.get('/lession05/minusCart', { id }, (data) => {
                if (!data.error) {
                    // 减少数量成功
                    var nowNum = $(this).parents("td").prev().html();  // 获取现在的数量
                    $(this).parents("td").prev().html(+nowNum - 1); // 改页面

                    // 改变数组中的数量
                    let obj = shoppingCart.find(value => value.goods_id == id);
                    obj.num--;

                    console.log(obj)

                    // 计算价格
                    computePrice();
                }
            })
        })
        $("tbody").on("click", ".del", function () {
              // 获取商品id
              let id = $(this).data('id');
              // 发送请求减少该商品的数量
              $.get('/lession05/deleteCart', { id }, (data) => {
                  if (!data.error) {
                      $(this).parents("tr").remove();
  
                      // 改变数组中的数量
                      let idx = shoppingCart.findIndex(value => value.goods_id == id);
                      shoppingCart.splice(idx, 1)
  
                      // 计算价格
                      computePrice();
                  }
              })
        })



        // 因为好多地方都用到了计算价格功能 所以单独封装成一个函数
        function computePrice() {
            // 先把所有checked属性为true的过滤出来  再计算过滤后的商品价格
            // var checkShoppingCart = shoppingCart.filter(value => value.checked);
            var checkShoppingCart = shoppingCart.filter((value) => {
                return value.checked
            });

            var allPrice = checkShoppingCart.reduce((prev, value) => prev + value.goods_price * value.num, 0);

            $("#allCount").html(allPrice)
        }

    })
})