// products.models.js

import { db } from '../data/data.js';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc
} from "firebase/firestore";

const collectionName = "products";

// Obtener todos los productos
export async function getAllProducts() {
  const ref = collection(db, collectionName);
  const snapshot = await getDocs(ref);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// Obtener un producto por ID
export async function getProductById(id) {
  const ref = doc(db, collectionName, id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...snapshot.data() };
}

// Crear un producto
export async function saveProduct(product) {
  const ref = collection(db, collectionName);
  const docRef = await addDoc(ref, product);

  return { id: docRef.id, ...product };
}

// Eliminar un producto
export async function deleteProduct(id) {
  const ref = doc(db, collectionName, id);
  await deleteDoc(ref);
}
