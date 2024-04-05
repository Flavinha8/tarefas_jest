
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory")
const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const UserCreateService = require("../services/UserServices/UserCreateService")

describe("TaskCreateService", () => {
    let taskRepositoryInMemory = null
    let userRepositoryInMemory = null
    let taskCreateService = null
    let userCreateService = null
    

    it("task should be created", async () =>{
        taskRepositoryInMemory = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepositoryInMemory)

        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)

        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }

        const userCreated = await userCreateService.execute(user)

        const task = {
            titulo: "task test",
            descricao: "task description os",
            isCompleted: "false",
            user_id: userCreated.user_id
        }

        const taskCreated = await taskCreateService.execute(task)

        expect(taskCreated).toHaveProperty("taskId")
        expect(taskCreated).toHaveProperty("user_id", userCreated.user_id)

    })
})