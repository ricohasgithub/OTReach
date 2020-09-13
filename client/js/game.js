
// Initialize a new socket for the reach game lobby
let socket = io("http://localhost:3000");

socket.on("message", function(data) {
    console.log(data);
    console.log(socket.id);
});

document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        // Space bar is equivalent to buzzer press
        case 33:
          socket.emit("buzz", socket.id);
          break;
    }
});

