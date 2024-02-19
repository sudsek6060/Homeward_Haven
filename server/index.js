import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookiParser from "cookie-parser";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB connected sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use(cookiParser());

app.listen(3000, () => {
  console.log("App is running at 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
