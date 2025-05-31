//Los modelos son una forma de especificar como se guardan los datos

import mongoose from "mongoose";

//Declaramos los tipos de los datos.
//NOTA: Los datos se van a guardar en la base de datos como se definio aqui.
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //Es obligatorio pasar el dato
        trim: true //Evita que se vallan espacios
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true //Hace que el email sea unico
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role', // Esto hace referencia al modelo de roles
    }
},
    {
        timestamps: true //Pone la fecha de creación y la fecha de la ultima actualización
    })

export default mongoose.model('User', userSchema); //Creara la colección Users e interactua con la base de datos
