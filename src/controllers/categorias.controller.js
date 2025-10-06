import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'categoria',
  idField: 'id_categoria',
  columns: ['nombre_categoria']
});
