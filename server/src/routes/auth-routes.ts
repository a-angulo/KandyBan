import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/user.js'; // 👈 must include `.js` for runtime!

const router = Router();

// 🔐 Login route
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('🔐 Login attempt:', { username, password });

    const user = await User.findOne({ where: { username } });
    console.log('👤 Found user:', user?.toJSON?.());

    if (!user) {
      console.log('❌ User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('❌ Password mismatch');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET_KEY || 'changeme',
      { expiresIn: '1h' }
    );

    console.log('✅ Login successful');
    return res.status(200).json({ token });
  } catch (error) {
    console.error('🔥 Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

router.post('/login', login);

// 🌱 TEMP: Seed test users with manually hashed password
router.get('/seed-multiple', async (_req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash('password', 10);

    await User.bulkCreate(
      [
        { username: 'JollyGuru', password: hashedPassword },
        { username: 'SunnyScribe', password: hashedPassword },
        { username: 'RadiantComet', password: hashedPassword }
      ]
    );

    console.log('🌱 Users seeded');
    res.status(201).json({ message: '✅ Seeded users successfully' });
  } catch (error) {
    console.error('❌ Seeding error:', error);
    res.status(500).json({ error: 'Failed to seed users' });
  }
});

export default router;