import {
    getAllProducts,
    getProductById,
    saveProduct,
    deleteProduct
} from '../models/products.models.js';

export async function getAllProductsService() {
    return await getAllProducts();
}

export async function getProductByIdService(id) {
    return await getProductById(id);
}

export async function createProductService(productData) {
    await saveProduct(productData);
    return productData;
}

export async function deleteProductService(id) {
  // Para saber si existía antes de borrar
    const product = await getProductById(id);

    if (!product) return false;

    await deleteProduct(id);
    return true;
}