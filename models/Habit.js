// import mongoose from 'mongoose';

// const habitSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   habit: {
//     type: String,
//     required: true
//   },
//   frequency: {
//     type: String, // daily, weekly, etc.
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   completedDates: {
//     type: [Date], // Array of dates when habit was marked complete
//     default: []
//   }
// });

// const Habit = mongoose.model('Habit', habitSchema);
// export default Habit;


// import mongoose from 'mongoose';

// const habitSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   habit: {
//     type: String,
//     required: true
//   },
//   frequency: {
//     type: String, // daily, weekly, etc.
//     required: true
//   },
//   category: {
//     type: String,
//     default: ''  // optional if you want to make it optional
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   completedDates: {
//     type: [{ date: Date }], // Array of objects with a date property
//     default: []
//   }
// });

// const Habit = mongoose.model('Habit', habitSchema);
// export default Habit;

// models/Habit.js
import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  username: { type: String, required: true },
  habit: { type: String, required: true },
  frequency: { type: String, required: true },
  category: { type: String, default: '' },
  completedDates: { type: [Date], default: [] },
});

const Habit = mongoose.model('Habit', habitSchema);

export default Habit;
