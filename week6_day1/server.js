var PORT = 3000;
var http = require('http');
var url=require('url');
var fs=require('fs');
var mine=require('./mine').types;
var path=require('path');
var querystring=require('querystring');
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join("assets", pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    if(pathname=="/ajax"){
        response.writeHead(200);
        response.end(JSON.stringify({name:"jyy",age:21,high:165}));
        return;
    }
    if(pathname=='/ajaxpost'){
        var data="";
        request.on('data',function(chunk){
            data+=chunk;
        });
        request.on("end",function(){
            console.log(data);
            response.end(JSON.stringify({data:'OK'}));
        });
        return;
    }
    if(pathname=='/jsonp'){
        var params=querystring.parse(url.parse(request.url).query);
        response.end(params.method+"('Jeams bond');");
    }
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err.toString());
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");