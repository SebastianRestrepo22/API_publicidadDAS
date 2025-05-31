import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getProduct, getProducts, deleteProduct, updateProduct, createProduct } from "../controllers/products.controller.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createProductSchema, updateProductSchema } from "../schemas/products.schema.js";

const router = Router();

router.get('/products', authRequired, getProducts);
router.get('/products/:id', authRequired, getProduct);
router.post('/products', authRequired, validateSchema(createProductSchema), createProduct);
router.delete('/products/:id', authRequired, deleteProduct);
router.put('/products/:id', authRequired, validateSchema(updateProductSchema), updateProduct);

export default router;
