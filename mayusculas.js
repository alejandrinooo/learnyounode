    var map = require('through2-map');
    var http = require('http');
    var port = process.argv[2];



    var server = http.createServer(function(req, res) {
    	if (req.method === 'POST') {
    		req.pipe(map(function(chunk) {
    			return chunk.toString().toUpperCase();
    		})).pipe(res);
    	} else {
    		return res.end('la pedicion tiene que ser POST\n');
    	}
    })
    server.listen(process.argv[2], function() {
    	console.log("estamos escuchando" + process.argv[2]);

    })