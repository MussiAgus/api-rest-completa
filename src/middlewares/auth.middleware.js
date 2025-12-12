import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Debe venir como: "Bearer token_acá"
  if (!authHeader) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1]; // se queda solo con el token

  if (!token) {
    return res.status(401).json({ error: 'Formato de autorización incorrecto' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // guardo info del usuario decodificado (ej: email)
    next(); // continúa
  } catch (error) {
    res.status(403).json({ error: 'Token inválido o expirado' });
  }
}
