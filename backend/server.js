
// Node.js socket.io dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

// Initialize the express backend app and the socket server
var app = express();
var server = http.Server(app);
var io = socketIO(server);

// Instantiate app ports
app.set('port', 5000);
app.use('/frontend', express.static(__dirname + '/frontend'));

// Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});


// Starts the server.
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {
});