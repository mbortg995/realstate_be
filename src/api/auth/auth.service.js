import { compareSync, hashSync } from 'bcrypt';
import userRepository from "../users/user.repository.js";
import jwt from 'jsonwebtoken';
import keys from '../../../constants.configs.js';

// Falta validar campos.

const generateToken = (email) => {
  const token = jwt.sign({ email }, keys.JWT_PRIVATE_KEY);
  return token;
};

const authService = {
  register: async (data) => {
    try {
      const hashedPassword = hashSync(data.password, 10);
      data.password = hashedPassword;
      const user = await userRepository.create(data);
      const token = generateToken(user.email);

      return {
        user,
        token
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('Email y/o usuario ya registrado.');
      }
      throw error;
    }
  },
  login: async (email, password) => {
    const user = await userRepository.getByEmail(email);
    if (!user) {
      throw new Error('No se encontró un usuario con este email');
    }

    const isSamePassword = compareSync(password, user.password);

    if (!isSamePassword) {
      throw new Error('La contraseña no coincide');
    }
    const token = generateToken(user.email);

    return {
      user,
      token
    };
  },
}

export default authService;