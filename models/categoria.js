import connection from "../utils/db.js";


class categoria{
  constructor(nombre,descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new error ("Error al consultar las categorias")
    }
  }
}

export default categoria;