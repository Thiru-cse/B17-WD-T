import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import empRouter from './Routers/employee.router.js';

dotenv.config()
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connectDB();

app.use("/api", empRouter);

app.listen(PORT, () => {
    console.log(`Server is running`);
})