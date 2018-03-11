const express = require("express");
const app = express();
const BodyParser = require("body-parser");

//Rutas
const Estudiantes = require("./routes/Estudiantes");

//Middlewares
app.use("/estudiantes", Estudiantes);
app.use(BodyParser.urlencoded({ extended: true }));

//Punto de Entrada o Root del servidor web, enviamos un archivo html al usuario
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//Enviamos un html con un formulario para agregar un nuevo estudiante
app.get("/nuevoestudiante", function(req, res) {
  res.sendFile(__dirname + "/public/agregarEstudiante.html");
});

//Iniciar Servidor
const addr = "localhost";
const port = "8081";
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Escuchando puerto ${port}`);
  }
});
