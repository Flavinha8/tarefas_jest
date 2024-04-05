
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory")
const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const UserCreateService = require("../services/UserServices/UserCreateService")
const TaskDeleteService = require("../services/TaskServices/TaskDeleteService")
const TaskListService = require("../services/TaskServices/TaskListService")

describe("TaskDeleteService", () => {
    let taskRepositoryInMemory = null
    let userRepositoryInMemory = null
    let taskDeleteService = null
    let taskCreateService = null
    let userCreateService = null
    let taskListService = null
    

    it("should be able to delete a task", async () =>{
        taskRepositoryInMemory = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepositoryInMemory)
        taskDeleteService = new TaskDeleteService(taskRepositoryInMemory)
        taskListService = new TaskListService(taskRepositoryInMemory)

        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)

        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }

        const userCreated = await userCreateService.execute(user)

        const task = {
            titulo: "Testando api com Jest",
            descricao: "Elaborar testes unitários na apliclçao",
            user_id: userCreated.user_id
        }

       await taskCreateService.execute(task)

        await taskDeleteService.execute(task)
        

        const list = await taskListService.execute()

        
        expect(list).not.toHaveProperty("title", "Testando api com Jest")

    })
})