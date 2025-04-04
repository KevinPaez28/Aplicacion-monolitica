import connection from "../utils/db.js";

class producto{
  constructor(nombre, descripcion,precio,categoria_id) {
    this.nombre = nombre; 
    this.descripcion = descripcion;
    this.precio = precio
    this.categoria_id = categoria_id;
  }
  async postAll() {
    try {
      const [result] = await connection.query("INSERT INTO productos (nombre, descripcion,precio,categoria_id) VALUES (?, ?, ?, ?)", [this.nombre, this.descripcion, this.precio, this.categoria_id])
      return {
        id:result.id,
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio,
        categoria_id: this.categoria_id
      }
    } catch (error) {
      throw new Error("Error al insertar el producto");
    }
  }
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM productos");
      return rows;
    } catch (error) {
      throw new error ("Error al consultar las categorias")
    }
  }
  async patchAll(id, newData) {
    try {
      for (const key in newData) {
        const [result] = await connection.query(`UPDATE productos SET ${key} = ?  where id = ?`, [newData[key], id]);
       }
       const [imprimir] = await connection.query("SELECT * FROM productos where id =?",[id])
      return imprimir; 
    } catch (error) {
      throw new Error("Error al actualizar la categoria")
    }
  }
  async putAll(nombre,descripcion,precio,categoria_id,id) {
    try {
      const [result] = await connection.query(`UPDATE productos SET nombre = ? ,descripcion = ? ,precio=?,categoria_id = ? where id = ?`,[nombre, descripcion,precio,categoria_id,id])
      if (result.affectedRows === 0) {
       throw new Error("Categoria no encontrada")
      }
      return { id, nombre , descripcion,precio,categoria_id }
    } catch (error) {
       throw new Error("Error al modificar la categoría");
    }
  }
  async deleteAll(id) {
     try {
      const [result] = await connection.query(`DELETE FROM productos WHERE id =?`, [id])
      return result;
    } catch (error) {
       throw new Error("Error al eliminar la categoria")
    }
  }
}
export default producto;