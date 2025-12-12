import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import prodRoutes from './src/routes/products.routes.js';
import logRoutes from './src/routes/auth.routes.js';

const PORT = process.env.PORT || 3000;
const app = express();

const corsConfig = {
    origin: ['http://localhost:5173', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

// Middlewares globales
app.use(cors(corsConfig));
app.use(express.json());

// Rutas
app.use('/api/products', prodRoutes);
app.use('/api', logRoutes);

// Middleware 404
app.use((req, res, next) => {
    res.status(404).send("Recurso no encontrado");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});