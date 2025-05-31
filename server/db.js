import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Sebastian:9t3PRwdCYk0qflwz@cluster0.aofittz.mongodb.net/publicidadDAS');
        console.log("La base de datos esta conectada.")
    }catch (error) {
        console.log(error, "Error: Conexión no realizada con la base de datos.");
    }
    
}


