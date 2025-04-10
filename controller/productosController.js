import producto from "../models/productos.js"

class productosController{
  static getAllproductos = async (req, res) => {
    const OBJproductos = new producto();
    const productos = await OBJproductos.getAll();
    res.json(productos)
  }
    static postAllproductos = async (req, res) => {
    const { nombre, descripcion,precio,categoria_id } = req.body;
    const OBJproductos = new producto();
    const productos = await OBJproductos.postAll(nombre, descripcion,precio,categoria_id);
    res.status(201).json(productos);
  }

   static patchAllproductos = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try { 
      const OBJproducto = new producto();
      const productos = await OBJproducto.patchAll(id,newData);
    res.status(201).json(productos);
    } catch (error) {
      res.status(500).json({ error: error.message });  
    }
   
  }
  static putAllproductos = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion,precio,categoria_id } = req.body;
    try{
      const OBJproductos = new producto(nombre, descripcion,precio,categoria_id);
      const productos = await OBJproductos.putAll(nombre,descripcion,precio,categoria_id,id);
    res.status(201).json(productos);
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  }
  static deleteAllproductos = async (req, res) => {
     const { id } = req.params;
    try { 
      const OBJproducto = new producto();
      const productos = await OBJproducto.deleteAll(id);
      res.status(201).json(productos);
    } catch (error) {
      res.status(500).json({ error: error.message });  
    }
  }
}
export default productosController