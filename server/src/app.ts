const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const socketIo = require("socket.io");

// Health check
import healthCheck from "./healthCheck";

const app = express();
const PORT = 3000;

// Cross origin 
app.use(cors());

app.get("/health", function (req, res) {
  res.send(healthCheck(req, res));
});

app.use(routes);

// Create server
const server = app.listen(3000, async () => {
  try {
    console.log(
      `Express server has started on port ${PORT}. Open http://localhost:${PORT}/health to check result.`
    );
  } catch (e) {
    console.log("Unable to start server", e);
  }
});

// web socket to update client regrading temperature change
const io = socketIo(server,{
  cors: {
      origins: ['http://localhost:3001']
  }
});
let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => sendNotification(socket), 5000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const sendNotification = (socket) => {
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", {});
};

export default app;
