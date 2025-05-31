import { z } from 'zod';

//Para validar cuando creamos un usuario
export const registerSchema = z.object({
    username: z.string({
        required_error: 'El usuario es requerido.'
    }).min(1, "El usuario no puede estar vacío."),
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email es inválido.'
    }).min(1, "El email no puede estar vacío."),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña requiere de 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email es inválido.'
    }).min(1, "El email no puede estar vacío."),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña requiere de 6 caracteres'
    })
})