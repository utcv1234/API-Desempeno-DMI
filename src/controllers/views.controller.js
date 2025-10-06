import { pool } from '../config/db.js';

const allowed = {
  'alertas-inventario': 'vw_alertas_inventario',
  'clientes-direcciones': 'vw_clientes_direcciones',
  'detalle-pedido-extended': 'vw_detalle_pedido_ext',
  'pagos-detalle': 'vw_pagos_detalle',
  'pedidos-en-proceso': 'vw_pedidos_en_proceso',
  'pedidos-resumen': 'vw_pedidos_resumen',
  'producto-catalogo': 'vw_producto_catalogo',
  'top-productos-vendidos': 'vw_top_productos_vendidos',
  'ventas-por-mes': 'vw_ventas_por_mes',
  'ultimo-acceso': 'vw_ultimo_acceso'
};

export function listViews(req, res) {
  res.json(Object.keys(allowed));
}

export async function getView(req, res, next) {
  try {
    const key = req.params.view;
    const view = allowed[key];
    if (!view) return res.status(404).json({ message: 'Vista no encontrada' });
    const { rows } = await pool.query(`SELECT * FROM ${view}`);
    res.json(rows);
  } catch (e) { next(e); }
}
