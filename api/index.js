import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import postsRoute from './routes/posts.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(cors());
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to mongoDB!');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});
/* middleware */
//user request middleware
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);

//error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen('5000', () => {
  connect();
  console.log('Backend server running!');
});

app.get('/', (req, res) => {
  res.send('It works');
});
