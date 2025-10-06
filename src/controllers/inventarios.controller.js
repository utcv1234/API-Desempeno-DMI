import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'inventario',
  idField: 'id_inventario',
  columns: ['existencia', 'umbral_minimo', 'actualizacion', 'id_producto']
});
