var fs = require('fs');


fs.readFile(process.argv[2],

	function callback(error, buffer) { /* ... */

		if (error) {
			console.log(error)
		}else{


		var string = buffer.toString();

		var lineas = string.split('\n');


		console.log(lineas.length - 1);

		
		}
	})