import { loginService } from '../services/auth.service.js';

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);

    if (!email || !password) {
      return res.status(400).json({ error: "Email y password son requeridos" });
    }
    if (!token) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json({
      message: 'Login exitoso',
      token: `Bearer ${token}`
    });

  } catch (error) {
    res.status(500).json({ error: 'Error en el login', details: error.message });
  }
}
