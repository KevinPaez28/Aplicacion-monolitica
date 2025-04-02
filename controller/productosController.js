import producto from "../models/productos.js"

class productosController{
  static getAllproductos = async (req, res) => {
    const OBJproductos = new producto();
    const productos = await OBJproductos.getAll();
    res.json(productos)
  }
    static postAllproductos = async (req, res) => {
    const { nombre, descripcion,precio,cateogria_id } = req.body;
    const OBJproductos = new producto(nombre, descripcion,precio,cateogria_id);
    const productos = await OBJproductos.postAll();
    res.status(201).json(productos);
  }
}
export default productosController