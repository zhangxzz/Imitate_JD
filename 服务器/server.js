const express = require("express");

const body = require("body-parser");

const session = require("express-session");

const app = express();

app.use(express.static("./static"));
app.set("trust proxy", 1);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 60, httpOnly: true },
  })
);

app.use(body.urlencoded({ extended: false }));

app.use("/lession01", require("./routers/lession01/index"));
app.use("/lession02", require("./routers/lession02/index"));
app.use("/lession03", require("./routers/lession03/index"));
app.use("/lession04", require("./routers/lession04/index"));
app.use("/lession05", require("./routers/lession05/index"));

let port = 3000;
function listen(port) {
  let server = app.listen(port);
  server.on("error", function (error) {
    if (error.code === "EADDRINUSE") {
      ++port;
      listen(port);
    }
  });
  server.on("listening", function() {
    console.log("监听成功,端口号为:" + port);
  })
}
listen(port);