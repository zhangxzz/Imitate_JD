var fs = require("fs");
var d = null;
fs.readFile(__dirname + "/../database/data.json", function(err, data) {
    d = JSON.parse(data.toString());
})
module.exports = function() {
    return d;
}