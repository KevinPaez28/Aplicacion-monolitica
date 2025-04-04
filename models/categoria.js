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
      throw new Error ("Error al consultar las categorias")
    }
  }

  async postAll(nombre,descripcion) {
    try {
      const[result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)",[nombre,descripcion]
      )
       return {
        id: result.insertId,
        nombre,
        descripcion
      };
    } catch (error) {
       throw new Error("Error al insertar la categoría");
    }
  }

  async putAll(nombre,descripcion,id) {
    try {
      const [result] = await connection.query(`UPDATE categorias SET nombre = ? ,descripcion = ?  where id = ?`,[nombre, descripcion,id])
      if (result.affectedRows === 0) {
       throw new Error("Categoria no encontrada")
      }
      return { id, nombre , descripcion }
    } catch (error) {
       throw new Error("Error al modificar la categoría");
    }
  }

  async patchAll(id, newData) {
    try {
      for (const key in newData) {
        const [result] = await connection.query(`UPDATE categorias SET ${key} = ?  where id = ?`, [newData[key], id]);
       }
       const [imprimir] = await connection.query("SELECT * FROM categorias where id =?",[id])
      return imprimir; 
    } catch (error) {
      throw new Error("Error al actualizar la categoria")
    }
  }
  async validarcategoria(categoria_id) {
    const [rows] = await connection.query("SELECT * FROM productos WHERE categoria_id = ?", [categoria_id]);
    return rows.length>0;
  }

  async deleteAll (id) {
    try {
      if (await this.validarcategoria(id)) {
        throw new Error("no se puede eliminar la categoria porque tiene productos asosiados")
      }
      const [result] = await connection.query(`DELETE FROM categorias WHERE id = ?`, [id])
    } catch (error) {
       throw new Error(error)
    }
  }
}


export default categoria;
