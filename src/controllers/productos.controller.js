import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'producto',
  idField: 'id_producto',
  columns: ['nombre_producto', 'descripcion', 'precio', 'unidad_medida', 'id_categoria']
});
