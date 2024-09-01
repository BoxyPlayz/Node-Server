const http = require("http")
const fs = require("fs")
const port = 7800

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile("index.html", function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write("<h1>Yeah my server expired 68 months ago lol</h1>")
        } else {
            res.write(data)
        }
    res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log("Oh no!", error)
    } else {
        console.log("Server is running on port " + port);
    }
})