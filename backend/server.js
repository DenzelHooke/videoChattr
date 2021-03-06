const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const colors = require("colors");
const socketio = require("socket.io");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== "production";
const app = express();
// const handle = app.getRequestHandler();

const server = http.createServer(app);

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users/", require("./routes/userRoutes"));

// server.get("*", (req, res) => {
//   return handle(req, res);
// });

server.listen(PORT, (e) => {
  if (e) {
    throw Error(e);
  } else {
    console.log(`running on port ${PORT}`);
  }
});
