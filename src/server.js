const { createServer } = require("http");
const { Server } = require("socket.io");

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const PORT_SOCKET = process.env.PORT_SOCKET || 3001;

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
app.listen(PORT);
console.log("Listening http on port " + PORT + "...");


const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} conectado.`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("send_cube", (data) => {
    socket.to(data.room).emit("move_cube", data);
  });

  socket.on("initial_cube", (data) => {
    socket.to(data.room).emit("set_cube");
  });
});

httpServer.listen(PORT_SOCKET);
console.log("Listening socket on port " + PORT_SOCKET + "...");
