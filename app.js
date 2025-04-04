const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const name = "Basic";

app.get("/", (req, res) => {
  const message = `${name} DevOps CI with GitHub Actions from scratch!`;
  res.send(message);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, server, name }; // Export the server for testing purposes
