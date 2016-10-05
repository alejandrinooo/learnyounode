


  var http = require('http');
  var bl=require('bl');
  http.get(process.argv[2], function(res) {
 
   res.pipe(bl(function (error, data) {  

   	if(error){

   		console.log(error);
   	}else{



   		var datos=data.toString();

   		console.log(datos.length)


   	}


   }))

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})