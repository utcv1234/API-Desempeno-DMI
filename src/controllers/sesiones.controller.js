import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'sesion',
  idField: 'id_sesion',
  columns: ['ultimo_acceso', 'nuevo_acceso', 'id_usuario']
});
