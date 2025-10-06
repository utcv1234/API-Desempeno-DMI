import { pool } from '../config/db.js';

export function buildCrud({ table, idField, columns }) {
  const tbl = `"${table}"`;
  const id = `"${idField}"`;
  const colNames = columns.map(c => `"${c}"`);

  const insertCols = colNames.join(', ');
  const insertParams = columns.map((_, i) => `$${i + 1}`).join(', ');
  const updateSet = colNames
    .map((c, i) => `${c} = $${i + 1}`)
    .join(', ');

  return {
    listar: async (req, res, next) => {
      try {
        const { rows } = await pool.query(`SELECT * FROM ${tbl} ORDER BY ${id} DESC`);
        res.json(rows);
      } catch (e) { next(e); }
    },
    obtener: async (req, res, next) => {
      try {
        const { id: idParam } = req.params;
        const { rows } = await pool.query(
          `SELECT * FROM ${tbl} WHERE ${id} = $1`,
          [idParam]
        );
        if (!rows.length) return res.status(404).json({ message: 'No encontrado' });
        res.json(rows[0]);
      } catch (e) { next(e); }
    },
    crear: async (req, res, next) => {
      try {
        const values = columns.map(c => req.body[c]);
        const { rows } = await pool.query(
          `INSERT INTO ${tbl}(${insertCols}) VALUES (${insertParams}) RETURNING *`,
          values
        );
        res.status(201).json(rows[0]);
      } catch (e) { next(e); }
    },
    actualizar: async (req, res, next) => {
      try {
        const { id: idParam } = req.params;
        const values = columns.map(c => req.body[c]);
        values.push(idParam);
        const { rows } = await pool.query(
          `UPDATE ${tbl} SET ${updateSet} WHERE ${id} = $${columns.length + 1} RETURNING *`,
          values
        );
        if (!rows.length) return res.status(404).json({ message: 'No encontrado' });
        res.json(rows[0]);
      } catch (e) { next(e); }
    },
    eliminar: async (req, res, next) => {
      try {
        const { id: idParam } = req.params;
        const { rowCount } = await pool.query(
          `DELETE FROM ${tbl} WHERE ${id} = $1`,
          [idParam]
        );
        if (!rowCount) return res.status(404).json({ message: 'No encontrado' });
        res.status(204).send();
      } catch (e) { next(e); }
    }
  };
}
