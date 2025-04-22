import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// ⬇️ Required for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files from the React dist folder
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

// ✅ Parse JSON and mount API routes
app.use(express.json());
app.use(routes);

// ✅ Catch-all: serve React for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

// ✅ Sync DB and start server
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

