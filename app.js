const express = require("express");
const mysql = require("mysql");
const PORT = 8082;
const app = express();
const rute = require("./routes/routesTipoUsuario.js");
var connection = mysql.createConnection({
  host: "localhost",
  user: "negocio",
  password: "negocionails",
  database: "negocio",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

app.use(rute.tipoUsuarioRoute);
app.listen(PORT, () => console.log(`server running on port${PORT}`));
