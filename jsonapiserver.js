	var http = require('http');
	var url = require('url');



	var server = http.createServer(function(req, res) {

		var objurl = url.parse(req.url, true)
		var fecha = new Date(objurl.query.ISO)

		var objson


		if(req.method==='GET'){

		if (objurl.pathname === '/api/parsetime') {



			var objetojson = {

				'hour': fecha.getHours(),
				'minutes': fecha.getMinutes(),
				'seconds': fecha.getSeconds()
			}

			var fecha = new Date(objurl.query.ISO);


		} else if (objurl.pathname === '/api/unixtime') {

			objson = {
				'unixtime': fecha.getTime()


			}



		} else {

			objson = {

				'error' : 'no se han puesto get'



			
			}

		}

		res.end(JSON.stringify(objetojson));

	   }
	})

	server.listen(process.argv[2], function() {
		console.log("estamos escuchando" + process.argv[2]);

	})