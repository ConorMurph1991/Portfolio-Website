var http = require('http');
http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World in Node!\n'); // without semicolon this will not build
}).listen(8036, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8036/');