// Módulos
import express from 'express';
import videogamesRoutes from './routes/videogames.routes.js'
import { connectDB } from './db.js';
import { PORT } from './config/config.js'

// Inicializaciones
const app = express();
connectDB();

// Configuraciones
app.set("port", PORT);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(videogamesRoutes);

export default app;