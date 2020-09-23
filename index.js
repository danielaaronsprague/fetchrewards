const path = require("path");
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 1337;
const app = express();

// Log requests
app.use(morgan("dev"));

// Serve up static files
app.use(express.static(path.join(__dirname, ".", "node_modules")));
app.use(express.static(path.join(__dirname, ".", "public")));

app.use((req, res, next) =>
  path.extname(req.path).length > 0 ? res.status(404).send("Not found") : next()
);

app.use("*", (req, res, next) =>
  res.sendFile(path.join(__dirname, ".", "public/index.html"))
);

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || "Internal server error.")
);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app;
