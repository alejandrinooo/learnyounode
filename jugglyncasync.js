var http = require('http');

 var server = http.createServer(function (req, res) {  
       // manejar cada petición aquí.

       console.log(process.argv[2]);  
     })  
     server.listen(8000)  
