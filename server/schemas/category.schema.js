import {z} from 'zod';

export const createCategorySchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido.'
    }).min(1, "El nombre no puede estar vacío."),
    description: z.string({
        required_error: 'La descripción debe ser string.'
    }).min(1, "La descripción no puede estar vacía.")
})

export const updateCategorySchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido.'
    }).min(1, "El nombre no puede estar vacío."),
    description: z.string({
        required_error: 'La descripción debe ser string.'
    }).min(1, "La descripción no puede estar vacía.")
})