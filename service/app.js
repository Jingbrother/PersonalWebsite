const express = require("express");
const app = express();
app.use("/public", express.static("public"));
app.get("/", function (req, res) {
  res.send("Hello World");
});
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Node.JS 服务器已启动，访问地址： http://%s:%s", host, port);
});
