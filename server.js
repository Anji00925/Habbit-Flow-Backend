import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import habitRoutes from './routes/habitRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);

app.get('/', (req, res) => {
  res.send("Habit Tracker API running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
