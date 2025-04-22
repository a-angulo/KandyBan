import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import { seedUsers } from '../seeds/user-seeds';

const router = Router();

export const login = async (req: Request, res: Response) => {
  // ... your existing login logic ...
};

router.post('/login', login);

// ✅ TEMP: Route to seed multiple test users
router.get('/seed-multiple', async (_req, res) => {
  try {
    await seedUsers();
    console.log('🌱 Users seeded');
    res.status(201).json({ message: '✅ Seeded multiple users successfully' });
  } catch (error) {
    console.error('❌ Seeding error:', error);
    res.status(500).json({ error: 'Failed to seed users' });
  }
});

export default router;