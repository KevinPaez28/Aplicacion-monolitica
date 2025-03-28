import categoria from "../models/categoria.js"

class categoriaController{
  static getAllcategorias = async (req, res) => { 
    const OBJcategoria = new categoria();
    const categorias = await OBJcategoria.getAll();
    res.json(categorias)
  }
}

export default categoriaController