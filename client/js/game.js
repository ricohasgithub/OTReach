
// Initialize a new socket for the reach game lobby
let socket = io("http://localhost:3000");

socket.on('message', function(data) {
  console.log(data);
});


