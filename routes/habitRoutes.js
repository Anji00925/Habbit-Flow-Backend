import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit,
  completeHabit
} from '../controllers/habitController.js';

const router = express.Router();

// 🔐 All routes below are protected by authenticateToken middleware
router.post('/', authenticateToken, createHabit);             // Create a new habit
router.get('/', authenticateToken, getHabits);                // Get user's habits
router.put('/:id', authenticateToken, updateHabit);           // Update habit by ID
router.delete('/:id', authenticateToken, deleteHabit);        // Delete habit by ID
router.post('/:habitId/complete', authenticateToken, completeHabit);  // Mark habit as completed

export default router;
