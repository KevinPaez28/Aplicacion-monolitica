import categoria from "../models/categoria.js"

class categoriaController{
  static getAllcategorias = async (req, res) => { 
    const OBJcategoria = new categoria();
    const categorias = await OBJcategoria.getAll();
    res.json(categorias)
  }
  static postAllcategorias = async (req, res) => {
    const { nombre, descripcion } = req.body;
    const OBJcategoria = new categoria(nombre, descripcion);
    const categorias = await OBJcategoria.postAll();
    res.status(201).json(categorias);
  }
}


export default categoriaController
