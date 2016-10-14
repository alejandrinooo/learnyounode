var map = require('through2-map');
var http = require('http');
var port = process.argv[2];
var datos;



var server = http.createServer(function(req, res) {

function callback(error, buffer) {

	if (error) {
		console.log(error)
	} else {


		datos = new Date();
		datos = data.toString()



	}
})
}.pipe(datos);

server.listen(process.argv[2], function() {
	console.log("estamos escuchando" + process.argv[2]);

})