	var http = require('http');
	var fs = require('fs');
	var bl = require('bl');
	var datos;



	var server = http.createServer(function(req, res) {

		var fichero = fs.createReadstream(process.argv[3]);
		res.pipe(res) 


			

			



		



  

			



		

	})

	server.listen(process.argv[2], function() {
		console.log("estamos escuchando" + process.argv[2]);


	})