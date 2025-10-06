import { buildCrud } from '../utils/crud.js';

export const { listar, obtener, crear, actualizar, eliminar } = buildCrud({
  table: 'detallepedido',
  idField: 'id_detalle',
  columns: ['cantidad', 'precio_unitario', 'sub_total', 'id_producto', 'id_pedido']
});
