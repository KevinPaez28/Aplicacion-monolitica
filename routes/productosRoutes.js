import express from "express";
import productosController from "../controller/productosController.js";
const exportar = express.Router();

exportar.get('/', productosController.getAllproductos)
exportar.post('/', productosController.postAllproductos)
exportar.patch('/:id', productosController.patchAllproductos)
exportar.put('/:id', productosController.putAllproductos)
exportar.delete('/:id', productosController.deleteAllproductos)

export default exportar;