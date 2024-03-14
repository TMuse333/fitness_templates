import express from 'express';
import Workout from './models/workout.model.js';

const router = express.Router();

router.post('/workout_stats', async (req, res) => {
  const { date, exercises } = req.body;

  try {
    const newWorkout = new Workout({ date, exercises });
    await newWorkout.save();
    
    res.json({ success: true, message: 'Workout data submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/workouts', async (req, res) => {
    try {
      const workouts = await Workout.find();
      res.json({ success: true, data: workouts });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

export default router;
