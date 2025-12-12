import jwt from 'jsonwebtoken';

export async function loginService(email, password) {
  // Esto es un ejemplo. Podrías validar contra Firestore si querés.
  const validEmail = process.env.AUTH_EMAIL;
  const validPassword = process.env.AUTH_PASSWORD;
  
  if (email !== validEmail || password !== validPassword) {
    return null;
  }

  const token = jwt.sign(
    { email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return token;
}
