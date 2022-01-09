const http = require('http');

// directs to the file wanted to use
const routes = require('./routes');

console.log(routes.someText);

// calls the export
const server = http.createServer(routes.handler);

server.listen(3000);