const http = require('http');
const today = require('./today');

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('Hello, world! The date is ${today.getDate()}');
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);