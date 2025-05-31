//El index.js es el que va a arrancar la aplicación
import app from "./app.js";
import { connectDB } from "./db.js";
import { createDefaultAdmin } from './utils/createDefaultAdmin.js';

const PORT = 4000;

async function startServer() {
    try {
        await connectDB(); //Inicia la conexión con la base de datos.
        console.log("Base de datos conectada.")

        await createDefaultAdmin(); // Llamar justo después de conectar a la DB

        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`)
        })
    } catch (error) {
        console.error('Error arrancando el servidor:', error);
    }
}

startServer();
