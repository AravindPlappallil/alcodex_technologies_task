import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const dbUri = process.env.MONGODB_URL;
console.log(dbUri);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("connected to mongoDB!");
  }) 
  .catch((err) => {
    console.log(err);
  });


const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running in 3000");
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal Server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


 