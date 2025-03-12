import express from 'express';
import { createEmpDetail, deleteEmpDetailById, editEmployeeDetail, getEmployeeDetails, getEmployeeDetailsById} from '../Controllers/employeeController.js'

const router = express.Router();

router.get("/get-empDetails", getEmployeeDetails);
router.get("/get-empDetails/:id", getEmployeeDetailsById);
router.post("/create-empDetails", createEmpDetail);
router.put("/edit-empDetails/:id", editEmployeeDetail);
router.delete("/delete-empDetails/:id", deleteEmpDetailById);


export default router;