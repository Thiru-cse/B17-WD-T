import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import userRoutes from './Routers/user.router.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

connectDB();

app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
