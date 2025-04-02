import express from "express";
import productosController from "../controller/productosController.js";
const exportar = express.Router();

exportar.get('/', productosController.getAllproductos)
exportar.post('/', productosController.postAllproductos)

export default exportar;