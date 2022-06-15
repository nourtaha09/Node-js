
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/raw-html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>This is raw html</h1>');
    }

    else if (req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([{ name: 'Liam' }, { name: 'Noah' }]));
    }
    //if no route is found
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
    }
}
);

server.listen(3000);
console.log('Server running at http://localhost:3000/');

