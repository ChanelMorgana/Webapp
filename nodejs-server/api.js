const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch(req.url) {
        case '/books':
            res.writeHead(200);
            httpResponse = {'message': 'This is a JSON response for books'}
            res.end(JSON.stringify(httpResponse))
            break
        case "/authors":
            res.writeHead(200);
            httpResponse = {'message': 'This is a JSON response for authors'}
            res.end(JSON.stringify(httpResponse));
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
    
    res.end(JSON.stringify(httpResponse))

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});