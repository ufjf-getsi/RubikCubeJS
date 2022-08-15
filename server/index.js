const { createServer } = require('http');
const { Server } = require('socket.io');
// const cors = require('cors');

// app.use(cors);

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  console.log(`${socket.id} conectado.`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });


  socket.on('send_message', (data)=>{
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on('send_cube', (data)=>{
    socket.to(data.room).emit("move_cube", data);
  });
});

const port = 3001
httpServer.listen(port)
console.log('Listening on port ' + port + '...')