import express from 'express';
import { bookService } from '../controllers/bookingController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/book", authMiddleware ,bookService)

export default router;