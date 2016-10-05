var fs = require('fs');

var path = require('path');


module.exports = function(directorio, extension, callback) {


	fs.readdir(directorio, function(error, files) {
		var ficheroFiltrados = Array();
		extension = '.' + extension;

		files.forEach(function(file) {

			if (path.extname(file) == extension) {

				ficheroFiltrados.push(file);



			}



		});

		callback(null, ficheroFiltrados);
	})



}