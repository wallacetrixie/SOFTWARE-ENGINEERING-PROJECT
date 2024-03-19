import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

// CONFIGURATIONS
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 6001;
app.listen(8800, ()=>{
    console.log(`listening on port ${PORT}`);
})