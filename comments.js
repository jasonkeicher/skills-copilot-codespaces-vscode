// Create web server with node.js that will return the same object as response for url: http://localhost:8080/member
// 
// Use http module and createServer function, and writeHead, end functions to write response.
// 
// Use JSON.stringify() to convert object to string.
// 
// Run server with command: node comments.js
// 
// Test with Postman or browser.

const http = require('http');

const server = http.createServer((req, res) => {
    const member = {
        name: "John Doe",
        age: 30,
        skills: ["js", "html", "css"],
        salary: 1000
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(member));
});

server.listen(8080, () => {
    console.log('Server started on port 8080...');
});