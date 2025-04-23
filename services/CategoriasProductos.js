import Categoria from "../models/categoria.js"
import producto from "../models/productos.js"

class CategoriasProductos{
  categorias;
  productos;

  constructor() {
    this.categorias = new Categoria();
    this.productos = new producto()
  }

  async getCategoriaProductos(id) {
    const categorias = await this.categorias.getId(id);
    const Productos = await this.productos.getbycategoria_id(id);
    categorias[0].productos = Productos;
    return categorias
  }
}

export default CategoriasProductos;