import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'pedido',
  idField: 'id_pedido',
  columns: ['estado_orden', 'fecha_orden', 'fecha_entrega', 'total_pagar', 'responsable_entrega', 'id_usuario']
});
