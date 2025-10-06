import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'direccion',
  idField: 'id_direccion',
  columns: ['calle', 'colonia', 'ciudad', 'estado', 'codigo_postal', 'id_usuario']
});
