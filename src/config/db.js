import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool();

export async function checkDb() {
  const { rows } = await pool.query('SELECT 1 AS ok');
  return rows[0].ok === 1;
}
