/**
 * Created by caoyangkaka on 1/12/16.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

var getFile = function(path, res) {
    fs.readFile(path, function(err, data) {
        if(err) {
            res.writeHead(404);
            res.end('Not found.');
        } else {
            res.end(data);
        }
    });
}
http.createServer(function (req, res) {
    var params = url.parse(req.url, true);
    if (params.pathname === '/ajax') {
        res.end('Hello world.');
    } else {
        getFile(params.pathname.slice(1), res);
    }
}).listen(3000);