import {z} from 'zod';

export const createRoleSchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido.'
    }).min(1, "El nombre no puede estar vacío."),
})
