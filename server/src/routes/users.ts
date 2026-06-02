import { Router, Response } from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// Mock user storage
const userProfiles: Map<string, any> = new Map();

// Get user profile
router.get('/profile', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const profile = userProfiles.get(req.userId) || {
      id: req.userId,
      email: '',
      name: '',
      age: null,
      weight: null,
      height: null,
      goals: [],
      createdAt: new Date(),
    };

    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update user profile
router.put('/profile', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const { name, age, weight, height, goals } = req.body;

    const profile = userProfiles.get(req.userId) || { id: req.userId };
    const updated = {
      ...profile,
      name: name || profile.name,
      age: age !== undefined ? age : profile.age,
      weight: weight !== undefined ? weight : profile.weight,
      height: height !== undefined ? height : profile.height,
      goals: goals || profile.goals,
      updatedAt: new Date(),
    };

    userProfiles.set(req.userId!, updated);
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

export default router;
