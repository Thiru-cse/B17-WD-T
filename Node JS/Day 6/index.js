import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/dbConfig.js';
import authRoute from './routers/authRouter.js';
import serviceRoute from './routers/serviceRouter.js';
import bookingRoute from './routers/bookingRouter.js';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoute);
app.use("/api/service", serviceRoute);
app.use("/api/booking", bookingRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running on port", port); 
})