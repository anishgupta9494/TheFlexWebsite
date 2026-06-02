import { Router, Response } from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// Mock workout storage (replace with database)
const workouts: Map<string, any> = new Map();

// Get all workouts for user
router.get('/', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const userWorkouts = Array.from(workouts.values()).filter(
      (w) => w.userId === req.userId,
    );
    res.json(userWorkouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// Get single workout
router.get('/:id', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const workout = workouts.get(req.params.id);
    if (!workout || workout.userId !== req.userId) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch workout' });
  }
});

// Create workout
router.post('/', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const { name, description, exercises, duration, difficulty } = req.body;
    const workoutId = Date.now().toString();

    const workout = {
      id: workoutId,
      userId: req.userId,
      name,
      description,
      exercises,
      duration,
      difficulty,
      date: new Date(),
    };

    workouts.set(workoutId, workout);
    res.status(201).json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create workout' });
  }
});

// Update workout
router.put('/:id', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const workout = workouts.get(req.params.id);
    if (!workout || workout.userId !== req.userId) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    const updated = { ...workout, ...req.body };
    workouts.set(req.params.id, updated);
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update workout' });
  }
});

// Delete workout
router.delete('/:id', authMiddleware, (req: AuthRequest, res: Response) => {
  try {
    const workout = workouts.get(req.params.id);
    if (!workout || workout.userId !== req.userId) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    workouts.delete(req.params.id);
    res.json({ message: 'Workout deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

export default router;
