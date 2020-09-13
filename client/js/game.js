
// Initialize a new socket for the reach game lobby
let socket = io("http://localhost:3000");

socket.on("message", function(data) {
    console.log(data);
});

document.addEventListener("keydown", function(event) {
    // Check to see if the "buzzer" has been pressed (the space bar)
    if (event.keyCode === 32) {
      socket.emit("buzz", socket.id);
    }
});

