import express from 'express';
import { createService, getServices, deleteService, getService, updateService } from '../controllers/service.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validate.middleware.js';
import { createServiceSchema, updateServiceSchema } from '../schemas/service.schema.js';

const router = express.Router();

router.get("/services", authRequired, getServices);  
router.get("/services/:id", authRequired, getService);   
router.post("/services", authRequired, validateSchema(createServiceSchema), createService);  
router.delete("/services/:id", authRequired, deleteService); 
router.put("/services/:id", authRequired, validateSchema(updateServiceSchema), updateService); 


export default router;