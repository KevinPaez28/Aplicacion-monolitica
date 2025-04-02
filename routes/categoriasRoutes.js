import express from "express";
import categoriaController from "../controller/categoriaController.js";
const exportar = express.Router();

exportar.put('/:id', (req, res) => {
  console.log(req.body)
 })
exportar.get('/', categoriaController.getAllcategorias)

exportar.post('/', categoriaController.postAllcategorias)

export default exportar;
