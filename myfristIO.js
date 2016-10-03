var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var lineas = string.split('\n');


console.log(lineas.length - 1);