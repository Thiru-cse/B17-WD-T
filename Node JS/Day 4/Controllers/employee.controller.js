import Employee from "../Models/employee.schema.js";

// Create and Save a new Employee
export const createEmployee = async (req, res) => {
    try {
        // const {name,email} = req.body;
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(200).json({ message: "Emp Added Successfully!", data: newEmployee });
    } catch (error) {
        console.log(error);
    }
}

// Retrieve all Employees from the database.
export const getEmployeeDetail = async (req, res) => {
    try {
        const employee = await Employee.find()
        res.status(200).json({ data: employee });
    } catch (error) {
        console.log(error);
    }
}

// Find a single Employee by id
export const getEmployeeById = async (req, res) => {
    try {
        const empId = req.params.id;
        const employee = await Employee.findById(empId);
        if (!employee) {
            return res.status(404).json({message:"Emp Not Found!"})
        }
        res.status(200).json({message:"Find Employee", data:employee});
    } catch (error) {
       console.log(error);
    }
}
 
export const updateEmployeeById = async (req, res) => {
    try {
        const { email } = req.params;
        console.log("email", email);
        const { firstName, lastName, designation } = req.body;
        
        const result = await Employee.updateOne({ email }, { firstName, lastName, designation });
        console.log(result);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Employee Not Found!" });
        }
        const updateEmp = await Employee.find({ email })
        res.status(200).json({data:updateEmp})
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
        
    }
}