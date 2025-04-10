import express from "express";
import categoriaController from "../controller/CategoriaController.js";
import { Validarcategoria } from "../middlewares/validarCategoria.js";
const exportar = express.Router();

exportar.get('/', categoriaController.getAllcategorias)

exportar.post('/', Validarcategoria, categoriaController.postAllcategorias)

exportar.put('/:id', categoriaController.putAllcategorias)

exportar.patch('/:id', categoriaController.patchAllcategorias)

exportar.delete('/:id', categoriaController.deleteAllcategorias)

exportar.get('/:id', categoriaController.categoriabyId)

export default exportar;