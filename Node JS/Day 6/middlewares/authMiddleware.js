import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = async (req, res, next) => {
    // const token = req.header('Authorization'); // 1st method
    const token = req.headers.authorization?.split(" ")[1]; // split(' ')[1] => bearer token

    if (!token) {
        return res.status(401).json({ message: "Token Missing!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select("-paasword");
        next();
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const adminMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
     if (!token) {
       return res.status(401).json({ message: "Token Missing!" });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        const user = await User.findById(req.user._id);

        if (user.role === "Admin") {
            next();
        } else {
            return res.status(403).json({ message: "Access Denied!" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}