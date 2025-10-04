import dotenv from 'dotenv';
dotenv.config({ path: '.env.develop' });
import app from './app.js';
import { checkDb } from './config/db.js';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    const ok = await checkDb();
    if (!ok) throw new Error('DB check failed');
    app.listen(PORT, () =>
      console.log(`API escuchando en http://localhost:${PORT}`)
    );
  } catch (e) {
    console.error('No se pudo iniciar la API:', e.message);
    process.exit(1);
  }
})();
