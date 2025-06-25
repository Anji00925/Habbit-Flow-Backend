// // controllers/habitController.js
// import Habit from '../models/Habit.js';

// export const createHabit = async (req, res) => {
//   try {
//     const { username, habit, frequency } = req.body;

//     const newHabit = new Habit({ username, habit, frequency });
//     await newHabit.save();

//     res.status(201).json(newHabit);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const getHabits = async (req, res) => {
//   try {
//     const { username } = req.query;

//     const habits = await Habit.find({ username });
//     res.status(200).json(habits);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// controllers/habitController.js

// import Habit from '../models/Habit.js';

// // Create a habit for the logged-in user
// export const createHabit = async (req, res) => {
//   try {
//     const { habit, frequency, category } = req.body;
//     const username = req.user?.username;

//     if (!username) {
//       return res.status(401).json({ message: 'User not authenticated' });
//     }

//     const newHabit = new Habit({ username, habit, frequency, category });
//     const savedHabit = await newHabit.save();
//     res.status(201).json(savedHabit);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get all habits for the logged-in user
// export const getHabits = async (req, res) => {
//   try {
//     const username = req.user?.username;
//     if (!username) {
//       return res.status(401).json({ message: 'User not authenticated' });
//     }

//     const habits = await Habit.find({ username });
//     res.json(habits);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update a habit by ID (only for logged-in user)
// export const updateHabit = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const username = req.user?.username;
//     if (!username) {
//       return res.status(401).json({ message: 'User not authenticated' });
//     }

//     const habit = await Habit.findOneAndUpdate(
//       { _id: id, username },
//       req.body,
//       { new: true }
//     );

//     if (!habit) {
//       return res.status(404).json({ message: 'Habit not found or unauthorized' });
//     }

//     res.json(habit);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete a habit by ID (only for logged-in user)
// export const deleteHabit = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const username = req.user?.username;
//     if (!username) {
//       return res.status(401).json({ message: 'User not authenticated' });
//     }

//     const habit = await Habit.findOneAndDelete({ _id: id, username });

//     if (!habit) {
//       return res.status(404).json({ message: 'Habit not found or unauthorized' });
//     }

//     res.json({ message: 'Habit deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Mark a habit as completed for today
// export const completeHabit = async (req, res) => {
//   const { habitId } = req.params;
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   try {
//     const username = req.user?.username;
//     if (!username) {
//       return res.status(401).json({ message: 'User not authenticated' });
//     }

//     const habit = await Habit.findOne({ _id: habitId, username });
//     if (!habit) {
//       return res.status(404).json({ message: 'Habit not found' });
//     }

//     const alreadyCompleted = habit.completions?.some(
//       (c) => new Date(c.date).getTime() === today.getTime()
//     );

//     if (alreadyCompleted) {
//       return res.status(400).json({ message: 'Habit already completed today' });
//     }

//     habit.completions.push({ date: today });
//     await habit.save();

//     res.json(habit);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


import Habit from '../models/Habit.js';

// Create a habit for the logged-in user
export const createHabit = async (req, res) => {
  try {
    const { habit, frequency, category } = req.body;
    const username = req.user?.username;

    if (!username) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const newHabit = new Habit({ username, habit, frequency, category });
    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all habits for the logged-in user
export const getHabits = async (req, res) => {
  try {
    const username = req.user?.username;
    if (!username) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const habits = await Habit.find({ username });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a habit by ID (only for logged-in user)
export const updateHabit = async (req, res) => {
  const { id } = req.params;
  try {
    const username = req.user?.username;
    if (!username) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const habit = await Habit.findOneAndUpdate(
      { _id: id, username },
      req.body,
      { new: true }
    );

    if (!habit) {
      return res.status(404).json({ message: 'Habit not found or unauthorized' });
    }

    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a habit by ID (only for logged-in user)
export const deleteHabit = async (req, res) => {
  const { id } = req.params;
  try {
    const username = req.user?.username;
    if (!username) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const habit = await Habit.findOneAndDelete({ _id: id, username });

    if (!habit) {
      return res.status(404).json({ message: 'Habit not found or unauthorized' });
    }

    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Mark a habit as completed for today
export const completeHabit = async (req, res) => {
  const { habitId } = req.params;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const username = req.user?.username;
    if (!username) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const habit = await Habit.findOne({ _id: habitId, username });
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    if (!Array.isArray(habit.completedDates)) {
      habit.completedDates = [];
    }

    const alreadyCompleted = habit.completedDates.some((date) => {
      const completed = new Date(date);
      completed.setHours(0, 0, 0, 0);
      return completed.getTime() === today.getTime();
    });

    if (alreadyCompleted) {
      return res.status(400).json({ message: 'Habit already completed today' });
    }

    habit.completedDates.push(today);
    await habit.save();

    res.json(habit);
  } catch (error) {
    console.error('Error in completeHabit:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
