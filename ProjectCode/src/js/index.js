// 页面加载完成后执行此函数
$(function () {
    // 初始化swiper轮播图
    var swiper = new Swiper('.swiper-container', {
        initialSlide: 1,
        speed: 1000,
        loop: true,
        autoplay: true,
        delay: 2000
    });

    // 页面卷动监测
    $("#goTop").hide();
    $(window).scroll(function () {
        var scrollT = $(document).scrollTop();
        var offsetT = $("#monitor-scroll").offset().top;
        //判断
        if (scrollT >= offsetT) {
            $("#goTop").show();
        } else {
            $("#goTop").hide();
        }
    })

    // 回顶部
    $("#goTopBtn").click(function () {
        $("html,body").animate({scrollTop: 0}, 1000);
    })

    // 鼠标滑入
    $(".go-top-item").mouseenter(function(){
        $(this).css("background-color","#e2231a");
        $(this).children(".go-top-link").css("color","#fff");
    })
    // 鼠标滑出
    $(".go-top-item").mouseleave(function(){
        $(this).css("background-color","#fff");
        $(this).children(".go-top-link").css("color","#666");
    })


});

