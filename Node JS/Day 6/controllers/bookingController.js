import Booking from "../models/Booking.js";
import sendEmail from "../utils/mailer.js";

export const bookService = async (req, res) => {
    try {
        const { service, date } = req.body;
        
        // Check if the service and date are valid
        const existingBooking = await Booking.findOne({
            user: req.user._id,
            service,
            date
        });
        if (existingBooking) {
            return res.status(400).json({ message: "You already have a booking for this service" });
        }

        const booking = new Booking({ user: req.user._id, service, date });
        await booking.save();

        // Send email to user
        const userEmail = req.user.email;
        await sendEmail(
            userEmail,
            "Service Booking Confirmation",
            `You have successfully booked a service on ${date} at ${service}.`
        )
        res.status(200).json({ message: "Booking successfully", data: booking });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get all bookings (for Admin and Manager )
export const getAllBookings = async (req, res) => { 
    try {
        const bookings = await Booking.find().populate("user").populate("service");
        res.status(200).json({message: "All bookings", data: bookings})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}