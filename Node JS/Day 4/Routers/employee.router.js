import express from 'express';
import { createEmployee, getEmployeeById, getEmployeeDetail, updateEmployeeById } from '../Controllers/employee.controller.js';

const router = express.Router();

router.post('/create-employee', createEmployee)
router.get('/get-empdetails', getEmployeeDetail);
router.get("/get-empdetails/:id", getEmployeeById);
router.put("/edit-emp/:email", updateEmployeeById);

export default router;