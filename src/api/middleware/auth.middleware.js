import keys from '../../../constants.configs.js'
import jwt from 'jsonwebtoken';
import userRepository from '../users/user.repository.js';



const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  try {
    const { email } = jwt.verify(token, keys.JWT_PRIVATE_KEY);

    const user = await userRepository.getByEmail(email);

    if (!user) {
      return res.status(401).json({ error: "Unauthorized." });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized." });
  }
}

export default authMiddleware;