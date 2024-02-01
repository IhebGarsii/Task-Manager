// Import necessary dependencies
const express = require("express");
const tasksRouters = require("./routers/tasksRouters");
const cors = require("cors");

// Create an instance of the Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Middleware to log the path and method of each incoming request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes: Mount the tasksRouters at the "/tasks" endpoint
app.use("/tasks", tasksRouters);

// Start the server on port 3002
app.listen(3002, () => {
  console.log("Server started on port 3002");
});
