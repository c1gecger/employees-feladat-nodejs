import * as db from "../database/database.js"

export const getEmployees = (req, res) => {
    const employees = db.getEmployees()
    return res.status(200).json(employees)
}
export const getEmployeeById = (req, res) => {
    const employee = db.getEmployeeById(+req.params.id)
    if(!employee){
        return res.status(404).json({message: "Employee not found"});
    }
    return res.status(200).json(employee)
}
export const addEmployee = (req, res) => {
    const { company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date } = req.body
    if(!company || !lastname || !firstname || !position || !salary || !department || !gender || !holiday_days || !birth_date){
        return res.status(400).json({message: "All fields are required"});
    }
    if(salary <= 0){
        return res.status(400).json({message: "Salary must be above 0"});
    }
    if (holiday_days < 0){
        return res.status(400).json({message: "Holiday days must be 0 or above"});
    }
    if(birth_date.length !== 10 || birth_date[4] !== "-" || birth_date[7] !== "-"){
        return res.status(400).json({message: "Birth date must be in the format YYYY-MM-DD"});
    }
    db.addEmployee(company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date)
    return res.status(201).json({message: "Employee added successfully"});
}
export const updateEmployee = (req, res) => {
    
    let employee = db.getEmployeeById(+req.params.id)
    if(!employee){
        return res.status(404).json({message: "Employee not found"});
    }
    const { company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date } = req.body
    if(company) employee.company = company
    if(lastname) employee.lastname = lastname
    if(firstname) employee.firstname = firstname
    if(position) employee.position = position
    if(salary) employee.salary = salary
    if(department) employee.department = department
    if(gender) employee.gender = gender
    if(holiday_days) employee.holiday_days = holiday_days
    if(birth_date) employee.birth_date = birth_date
    db.updateEmployee(+req.params.id,employee.company,employee.lastname,employee.firstname,employee.position,employee.salary,employee.department,employee.gender,employee.holiday_days,employee.birth_date)
    return res.status(200).json({message: "Employee updated successfully"});
}

export const deleteEmployee = (req, res) => {
    const employee = db.getEmployeeById(+req.params.id)
    if(!employee){
        return res.status(404).json({message: "Employee not found"});
    }
    db.deleteEmployee(+req.params.id)
    return res.status(204).json({message: "Employee deleted successfully"});
}