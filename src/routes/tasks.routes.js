const {Router} = require("express")
const TaskController = require("../controllers/TaskController")
const checkTasksExists = require("../middlewares/checkTasksExists")
const userRoutes = require("./users.routes")

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.post("/tasks/:user_id", taskController.createTask)

taskRoutes.get("/tasks", taskController.listTask)

taskRoutes.get("/tasks/:id", checkTasksExists, taskController.listTaskById)

taskRoutes.put("/tasks/:id", checkTasksExists, taskController.updateTask)

taskRoutes.patch("/tasks/status/:id", checkTasksExists, taskController.updateTaskStatus)

taskRoutes.delete("/tasks/:id", checkTasksExists, taskController.deleteTask)


module.exports = taskRoutes