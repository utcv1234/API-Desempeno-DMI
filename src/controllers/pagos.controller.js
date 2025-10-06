import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'pago',
  idField: 'id_pago',
  columns: ['monto_final', 'metodo', 'estado', 'fecha_pago', 'id_pedido']
});
