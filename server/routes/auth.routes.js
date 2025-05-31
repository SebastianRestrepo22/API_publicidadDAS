import { Router } from "express";
import { login, register, logout, profile } from '../controllers/auth.controller.js';
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router(); //Con esto ya podemos crear las peticiones o rutas

router.post('/register', validateSchema(registerSchema), register); //El registrer es una función que viene de controllers
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);

export default router;
