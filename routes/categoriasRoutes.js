import express from "express";
import categoriaController from "../controller/categoriaController.js";
import { Validarcategoria } from "../middlewares/validarCategoria.js";
const exportar = express.Router();

exportar.get('/', categoriaController.getAllcategorias)

exportar.post('/', Validarcategoria, categoriaController.postAllcategorias)

exportar.put('/:id', categoriaController.putAllcategorias)

exportar.patch('/:id', categoriaController.patchAllcategorias)

exportar.delete('/:id', categoriaController.deleteAllcategorias)

export default exportar;