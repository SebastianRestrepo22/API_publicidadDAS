import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getCategory, getCategories, deleteCategory, createCategory, updateCategory } from "../controllers/category.controller.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createCategorySchema, updateCategorySchema } from "../schemas/category.schema.js"; 

const router = Router();

router.get('/category', authRequired, getCategories);
router.get('/category/:id', authRequired, getCategory);
router.post('/category', authRequired, validateSchema(createCategorySchema), createCategory);
router.delete('/category/:id', authRequired, deleteCategory);
router.put('/category/:id', authRequired, validateSchema(updateCategorySchema), updateCategory);

export default router;