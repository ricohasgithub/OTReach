
// Initialize a new socket
let socket = io("http://localhost:3000");

socket.on('message', function(data) {
  console.log(data);
});


