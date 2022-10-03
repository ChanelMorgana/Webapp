Basically I just made a new folder and created a Javascript document with the following code:

```
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
```

Then I ran it with: `node hello.js`

Web servers accept requests from browsers and other clients. We may interact with a web server by entering a domain name, which is translated to an IP address by a DNS server. An IP address is a unique sequence of numbers that identify a machine on a network, like the internet. For more information on domain name concepts, take a look at [An Introduction to DNS Terminology, Components, and Concepts](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts#domain-terminology) article.

We want the HTTP server to act as our way of getting information from the database and and any other back-end processes that we want to take place. To keep the data in the same format, we return a JSON response, so I edited the file slightly. And then ran `node api.js`

```
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
```
