import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'tipousuario',
  idField: 'id_tipo',
  columns: ['tipo_usuario']
});
