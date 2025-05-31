//En app.js es donde se configura express del backend

import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'; //Ayuda a convertir una cookie a un objeto JSON

import authRoutes from './routes/auth.routes.js';
import categoryRoutes from './routes/category.routes.js';
import productRoutes from './routes/products.routes.js'
import roleRoutes from './routes/role.route.js';
import serviceRoutes from './routes/service.route.js';

//Server
const app = express(); //Aca inicializamos express y el objeto que nos manda lo guardamos en una constante

app.use(morgan('dev')); // Muestra la petición que ha llegado
app.use(express.json()); //Esto es para que convierta los req.body en json o objeto de JavaScript
app.use(cookieParser());

//NOTA: /api quiere decir que todas las rutas empezaran con api
app.use('/api', authRoutes); //Procesamos las rutas que vienen de auth.routes.js
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use("/api", roleRoutes);
app.use("/api", serviceRoutes);

export default app;