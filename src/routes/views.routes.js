import { Router } from 'express';
import { listViews, getView } from '../controllers/views.controller.js';

const r = Router();
r.get('/', listViews);
r.get('/:view', getView);

export default r;
