 var filtradomodle = require('./filtradomodle.js');

var callback=function(error,files){



if(error) console.log(error);

	else{

		files.forEach(function (file){

			console.log(file);
		})
	}
}


 filtradomodle(process.argv[2],process.argv[3],callback)