import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1]; // Bearer <token>
    if (!token) {
        res.sendStatus(401); // Explicit return here
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || 'changeme');
        req.user = decoded;
        next(); // ✅ only hits here if token is valid
    }
    catch (err) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};
