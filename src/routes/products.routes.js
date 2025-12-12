import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';


import {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController
} from '../controllers/products.controller.js';

const router = Router();

// GET /api/products
router.get('/', getAllProductsController);

// GET /api/products/:id
router.get('/:id', getProductByIdController);

// POST /api/products
router.post('/', authMiddleware, createProductController);

// DELETE /api/products/:id
router.delete('/:id', authMiddleware, deleteProductController);

export default router;