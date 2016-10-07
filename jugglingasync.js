


  var http = require('http');
  var bl = require('bl');
  var respuesta = Array();

  var contador = 0;

  function escribirrespuestas() {

  	respuesta.forEach(function(respuesta) {

  		console.log(respuesta);

  	})
  }



  function peticion(indice) {


  	http.get(process.argv[2 + indice], function(res) {

  		res.pipe(bl(function(error, data) {

  			if (error) {

  				console.log(error);
  			} else {



  				var datos = data.toString();

  				//console.log('===================' + datos.length);

  				//console.log(datos);

  				respuesta[indice] = datos;

  				contador++

  				if (contador === 3) {
  					escribirrespuestas() ;
  				}
  			}


  		}))

  	}).on('error', function(e) {
  		console.log("Got error: " + e.message);
  	})
  }

  for (var i = 0; i < 3; i++) {

  	peticion(i);
  }