const employees = [
    { id: 1, name: 'John Doe', designation: 'Software Engineer' },
    { id: 2, name: 'Jane Doe', designation: 'Python Developer' },
    { id: 3, name: 'Jim Doe', designation: 'Frontend Developer' },
    { id: 4, name: 'Jill Doe', designation: 'Backend Developer' },
    { id: 5, name: 'Jack Doe', designation: 'FSD Developer' }
]

// Get all employee details
export const getEmployeeDetails = (req, res) => {
    res.status(200).json(employees);
}

// Get employee details by id
export const getEmployeeDetailsById = (req, res) => {
    const empId = req.params.id; 
    console.log(empId);

    const empDetails = employees.find(emp => emp.id == empId)
    if (!empDetails) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message:"Employee Details Found", empDetails })
}

// Create employee details
export const createEmpDetail = (req, res) => {
    const { name, designation } = req.body;
    const newEmployee = {
      id: employees.length + 1,
        name: name,
      designation: designation
    }
    employees.push(newEmployee);

    res.status(200).json({ message: 'Employee added successfully', newEmployee });
}

// Edit employee details
export const editEmployeeDetail = (req, res) => { 
    const empId = req.params.id;
    const { name, designation } = req.body;
    const index = employees.findIndex(emp => emp.id == empId); // 5 - 0 1 2 3 4
    if (index === -1) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    employees[index].name = name;
    employees[index].designation = designation;

    res.status(200).json({ message: 'Employee updated successfully', employees });
}

export const deleteEmpDetailById = (req, res) => {
    const empId = req.params.id;
    const index = employees.findIndex(emp => emp.id == empId);
    if (index === -1) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    employees.splice(index, 1);
    res.status(200).json({ message: 'Employee deleted successfully', employees });
}