const express = require("express");
const tipoUsuarioRoute = express.Router();

tipoUsuarioRoute.get("/", (req, res) => {
  res.send("welcome to my api jejeje");
});

exports.tipoUsuarioRoute = tipoUsuarioRoute;
