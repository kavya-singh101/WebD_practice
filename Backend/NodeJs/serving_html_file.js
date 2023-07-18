// way to import modules in js
const http = require('http');
const fs = require('fs');

const filecontent = fs.readFileSync('hello.txt');

// this is how you can create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(filecontent);
});

// if you use 80 port then you don't neeed to mention this port individually in the browser just on the server and type 127.0.0.1 and get you output
server.listen(80, '127.0.0.1', () => {
    console.log('Listening on port 80');
});
