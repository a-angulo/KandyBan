import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
  id?: number;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // Bearer <token>

  if (!token) {
    res.sendStatus(401); // Explicit return here
    return;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || 'changeme'
    ) as JwtPayload;

    req.user = decoded;
    next(); // ✅ only hits here if token is valid
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};
