var net = require("http");
var date = require("date");
var url = require('url');
var port = process.argv[2];
net.createServer(function (req, res) {
    if (req.method == 'GET'){
        res.writeHead(200,"OK",{ 'Content-Type': 'application/json' });
        var urlRequest = req.url;
        var toRet = {};
        var parsedUrl = url.parse(urlRequest, true);
        switch (parsedUrl.pathname) {
            case "/api/parsetime":
                var date = new Date(parsedUrl.query.iso);
                toRet = { 
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds(),
                };
                break;
            case "/api/unixtime":
                toRet = { unixtime: (new Date(parsedUrl.query.iso)).getTime() };
            break;
        }
        res.write(JSON.stringify(toRet));
        res.end();
    }
    }).listen(port);  