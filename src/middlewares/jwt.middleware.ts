import { Request, Response, NextFunction } from 'express';
import jwtUtil from '../utils/jwt/jwt.util';

const jwtMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = await jwtUtil.verifyAccessToken(token);
    (req as any).user = decoded; // Attach decoded user info to the request object
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

export default jwtMiddleware;