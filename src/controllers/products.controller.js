import {
    getAllProductsService,
    getProductByIdService,
    createProductService,
    deleteProductService
} from '../services/products.service.js';

// GET /api/products
export async function getAllProductsController(req, res) {
    try {
    const products = await getAllProductsService();
    res.json(products);
    } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos', details: error.message });
    }
}

// GET /api/products/:id
export async function getProductByIdController(req, res) {
    try {
    const { id } = req.params;
    const product = await getProductByIdService(id);

    if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(product);
    } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
}
}

// POST /api/products/create
export async function createProductController(req, res) {
try {
    const productData = req.body;

    const created = await createProductService(productData);

    res.status(201).json({
    message: 'Producto creado correctamente',
    product: created
    });
} catch (error) {
    res.status(500).json({ error: 'Error al crear producto', details: error.message });
}
}

// DELETE /api/products/:id
export async function deleteProductController(req, res) {
    try {
        const { id } = req.params;

        const deleted = await deleteProductService(id);

    if (!deleted) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto', details: error.message });
    }
}
