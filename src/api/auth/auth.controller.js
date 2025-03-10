import authService from "./auth.service.js";

export const authController = {
  register: async (req, res) => {
    try {
      const user = await authService.register(req.body);
      return res.json(user);
    } catch (error) {
      if (error.message === 'Email y/o usuario ya registrado.') {
        return res.status(409).json({ error: error.message });
      }
      return res.status(422).json({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const user = await authService.login(req.body.email, req.body.password);
      return res.json(user);
    } catch (error) {
      if (error.message === 'No se encontró un usuario con este email') {
        return res.status(404).json({ error: error.message });
      }

      if (error.message === 'La contraseña no coincide') {
        return res.status(403).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Error en el servidor' });
    }
  },
};
