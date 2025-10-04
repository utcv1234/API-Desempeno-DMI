import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index.js';
import { errorHandler } from './middlewares/error.handler.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() });
});

// Rutas de negocio
app.use('/api', router);

// Manejo centralizado de errores
app.use(errorHandler);

export default app;
