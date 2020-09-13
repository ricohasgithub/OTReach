// Retrieve dependencies
const express = require("express")();
const http = require("http").Server(express);
const socketio = require("socket.io")(http);

// Have the socket listen for the connection event (triggered at everytime a player goes onto the server)
socketio.on("connection", socket => {

    // Listen for buzzes
    socket.on("buzz", data => {
        // Lock the room and output the name of the person who first buzzed
        socketio.emit("message", data);
    });

});

// Serve the express socket.io server
http.listen(3000, () => {
    console.log("Listening at port 3000...");
});
