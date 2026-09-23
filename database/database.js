import Database from 'better-sqlite3'
const db = new Database("./database/database.db")

export const getEmployees = () => db.prepare("SELECT * FROM employees").all()
export const getEmployeeById = (id) => db.prepare("SELECT * FROM employees WHERE id = ?").get(id)
export const addEmployee = (company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date) => db.prepare("INSERT INTO employees (company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date) VALUES (?,?,?,?,?,?,?,?,?)").run(company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date)

export const updateEmployee = (id,company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date) => db.prepare("UPDATE employees SET company = ?, lastname = ?, firstname = ?, position = ?, salary = ?, department = ?, gender = ?, holiday_days = ?, birth_date = ? WHERE id = ?").run(company,lastname,firstname,position,salary,department,gender,holiday_days,birth_date,id)

export const deleteEmployee = (id) => db.prepare("DELETE FROM employees WHERE id = ?").run(id)