import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashPassword, role });
        await newUser.save();
        res.status(200).json({message: "User Registered Successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
 
export const loginUser = async (req, res) => { 
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(401).json({ message: "Invalid Password" });

        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({ message: "Logged In Successfully!", token })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}