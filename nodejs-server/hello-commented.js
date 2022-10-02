const http = require('http')


// Handle incoming HTTP request and return HTTP response
// req is the request object
// res is the response object
// All request listener functions in Node.js accepts these two arguments
const requestListener = function (req, res) {
    res.writeHead(200); // Set HTTP Response
    // end returns any data the server has to return
    res.end("My first server!");
};

// The server will take all requests and pass them to our function
const server = http.createServer(requestListener);
// The value localhost is a special private address that computers use to refer to themselves.
host = 'localhost';
port = 8000;
// Bind the server to a network address
// The console.log triggers when the server begins to listen
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});