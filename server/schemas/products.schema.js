import { z } from 'zod';

export const createProductSchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido.'
    }).min(1, "El nombre no puede estar vacío."),
    description: z.string({
        required_error: 'La descripción es requerido.'
    }).min(1, "La descripción no puede estar vacía."),
    price: z.number({
        required_error: 'El precio es requerido.'
    }).positive("El precio debe ser un número positivo."),
    stock: z.number({
        required_error: 'El stock es requerido.'
    }).int("El stock debe ser un número entero.").nonnegative("El stock no puede ser negativo."),
    category: z.string({ 
        required_error: 'La categoría es requerida.' 
    }).min(1, "La categoría no puede estar vacía.") // si es string con ID
})

export const updateProductSchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido.'
    }).min(1, "El nombre no puede estar vacío."),
    description: z.string({
        required_error: 'La descripción es requerido.'
    }).min(1, "La descripción no puede estar vacía."),
    price: z.number({
        required_error: 'El precio es requerido.'
    }).positive("El precio debe ser un número positivo."),
    stock: z.number({
        required_error: 'El stock es requerido.'
    }).int("El stock debe ser un número entero.").nonnegative("El stock no puede ser negativo."),
    category: z.string({ 
        required_error: 'La categoría es requerida.' 
    }).min(1, "La categoría no puede estar vacía.") // si es string con ID
})