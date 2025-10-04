import { Router } from 'express';
import categoriasRoutes from './categorias.routes.js';
import detallePedidosRoutes from './detallepedidos.routes.js';
import direccionesRoutes from './direcciones.routes.js';
import inventariosRoutes from './inventarios.routes.js';
import pagosRoutes from './pagos.routes.js';
import pedidosRoutes from './pedidos.routes.js';
import productosRoutes from './productos.routes.js';
import sesionesRoutes from './sesiones.routes.js';
import tiposUsuarioRoutes from './tiposusuario.routes.js';
import usuariosRoutes from './usuarios.routes.js';
import viewsRoutes from './views.routes.js';

const router = Router();
router.use('/categorias', categoriasRoutes);
router.use('/detalle-pedidos', detallePedidosRoutes);
router.use('/direcciones', direccionesRoutes);
router.use('/inventarios', inventariosRoutes);
router.use('/pagos', pagosRoutes);
router.use('/pedidos', pedidosRoutes);
router.use('/productos', productosRoutes);
router.use('/sesiones', sesionesRoutes);
router.use('/tipos-usuario', tiposUsuarioRoutes);
router.use('/usuarios', usuariosRoutes);
router.use('/views', viewsRoutes);

export default router;
