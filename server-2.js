let http = require("http");
let static = require('node-static');

let file=new static.Server('.');
http.createServer(function(request, response) {
  file.serve(request,response);
}).listen(8888);
console.log('Server running on port 8888');
