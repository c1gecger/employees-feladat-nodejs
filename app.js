import express from "express"
import cors from "cors"
import employeesRoutes from "./routes/employees.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/api/employees", employeesRoutes)

app.listen(PORT, ()=> {console.log(`Server runs on ${PORT}`)})

