// Retrieve dependencies
const express = require("express")();
const http = require("http").Server(express);
const socketio = require("socket.io")(http);

// Have the socket listen for the connection event (triggered at everytime a player goes onto the server)
socketio.on("connection", socket => {

});

// Serve the express socket.io server
http.listen(5000, () => {
    console.log("Listening at port 3000...");
});
