import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'usuario',
  idField: 'id_usuario',
  columns: ['nombre', 'apellido_paterno', 'apellido_materno', 'telefono', 'correo', 'contrasena', 'id_tipo']
});
