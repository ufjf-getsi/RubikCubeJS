const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const io = socket(server, {
  cors: {
    origin: '*'
  },
});
server.listen(PORT, () => console.log(`Server on port ${PORT}`));


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

