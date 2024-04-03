import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import userRoutes from "./routers/userRoutes.js";
import cors from "cors";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

connectDB();
const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "*", Credentials: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// connect our app the routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
