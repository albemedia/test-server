const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const estudiantesData = require("../models/estudiantes");

//Usa bodyParser para transformar los parametros de POST a objeto
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//Lista todos los estudiantes
router.get("/", function(req, res) {
  res.json(estudiantesData);
});

//Mostrar un estudiante
router.get("/:ced", function(req, res) {
  const id = req.params.ced;
  res.send(
    estudiantesData.find(data => {
      return data.cedula === id;
    }) || { error: "Estudiante no existe" }
  );
});

//Agregar nuevo Estudiante
router.post("/", function(req, res) {
  if (estudiantesData.push(req.body)) {
    res.send(estudiantesData);
  } else {
    res.send({
      status: error,
      msg: "Hubo un error al intentar agregar"
    });
  }
});

module.exports = router;
