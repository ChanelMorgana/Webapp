const http = require('http')



const requestListener = function (req, res) {
    res.writeHead(200); 
    res.end("My first server!");
};

const server = http.createServer(requestListener);
host = 'localhost';
port = 8000;
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});