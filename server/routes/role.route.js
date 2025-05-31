import express from 'express';
import { createRole, getRoles, deleteRole, getRole } from '../controllers/role.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createRoleSchema } from '../schemas/role.schema.js';

const router = express.Router();

router.get("/role", authRequired, getRoles);
router.get("/role/:id", authRequired, getRole);
router.post("/role", authRequired, validateSchema(createRoleSchema), createRole);
router.delete("/role/:id", authRequired, deleteRole);

export default router;
