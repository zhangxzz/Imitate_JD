"use strict";$(function(){$("#loginBtn").click(function(){var e=$("#usernameInput").val(),o=$("#passwordInput").val();pxmu.loading("信息提交中，请稍后..."),$.post("/lession05/login",{username:e,password:o},function(o){console.log(o),pxmu.closeload(),o.error?pxmu.failed("登录失败！"):(pxmu.success("登录成功！"),localStorage.setItem("username",e),$("#profile").attr("src","/imgs/profile.jpg"),setTimeout(function(){location.href="../index.html"},500))})})});
//# sourceMappingURL=login.js.map
