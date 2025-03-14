import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    designation: String,
})

const Employee = mongoose.model('Employee', empSchema);
export default Employee;