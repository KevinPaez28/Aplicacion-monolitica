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
  async postAll() {
    try {
      const[result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)",[this.nombre, this.descripcion]
      )
       return {
        id: result.insertId,
        nombre: this.nombre,
        descripcion: this.descripcion
      };
    } catch (error) {
       throw new Error("Error al insertar la categoría");
    }
  }
}


export default categoria;
