var http = require('http');

 var server = http.createServer(function (req, res) {  
       // manejar cada petición aquí.


     })

 	var serverObject =server.listen(process.argv[2]);

     console.log(process.argv[2]);  
     server.listen("estamos escuchando" + process.argv[2]);  

     if(serverObject){
		  server.listen("estamos escuchando" + process.argv[2]);       	
     }else{
     	console.log('error');
     }
