import {Router} from "express"
import * as employeeController from "../controllers/employeeController.js"

const router = Router()

router.get("/", employeeController.getEmployees)
router.get("/:id", employeeController.getEmployeeById)
router.post("/", employeeController.addEmployee)
router.put("/:id", employeeController.updateEmployee)
router.delete("/:id", employeeController.deleteEmployee)

export default router