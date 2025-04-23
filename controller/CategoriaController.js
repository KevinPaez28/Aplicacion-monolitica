import categoria from "../models/categoria.js"
import CategoriasProductos from "../services/CategoriasProductos.js";

class categoriaController{
  static getAllcategorias = async (req, res) => { 
    const OBJcategoria = new categoria();
    const categorias = await OBJcategoria.getAll();
    res.json(categorias)
  }

  static postAllcategorias = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
    const OBJcategoria = new categoria(nombre, descripcion);
    const categorias = await OBJcategoria.postAll(nombre,descripcion);
    res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({error: error.message})
    }
    
  }
  static putAllcategorias = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try{
      const OBJcategoria = new categoria(nombre, descripcion);
      const categorias = await OBJcategoria.putAll(nombre,descripcion,id);
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  }

  static patchAllcategorias = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try { 
      const OBJcategoria = new categoria();
      const categorias = await OBJcategoria.patchAll(id,newData);
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({ error: error.message });  
    }
   
  }
  static deleteAllcategorias = async (req, res) => {
    const { id } = req.params;
    try { 
      const OBJcategoria = new categoria();
      const categorias = await OBJcategoria.deleteAll(id);
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({ error: error.message });  
    }
  }
  static getbyId = async (req, res) => {
    const { id } = req.params;
    try {
      const OBJcategoriaproducto = new CategoriasProductos()
      const categorias = await OBJcategoriaproducto.getCategoriaProductos(id);
      res.status(200).json(categorias);
    } catch (error) {
      
    }
  } 
}


export default categoriaController;
