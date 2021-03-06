const express = require("express");
const mysql = require("mysql");
const PORT = 8082;
const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "negocio",
  password: "negocionails",
  database: "negocio",
});

app.get("/", (req, res) => {
  res.send("welcome to my api");
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

app.listen(PORT, () => console.log(`server running on port${PORT}`));
