
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory")
const UserRepositoryinMemory = require("../repositories/userRepository/userRepositoryInMemory")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const TaskListService = require("../services/TaskServices/TaskListService")
const UserCreateService = require("../services/UserServices/UserCreateService")


describe("TaskListService", () => {
    
    let userCreateService = null
    let taskRepository = null
    let taskCreateService = null
    let taskListService = null
    let userRepository = null

    it("should be possible list tasks", async () => {
        const user = {
            name: "user test",
            email: "user@teste.com",
            password: "123"
        }

        userRepository = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepository)
        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskListService = new TaskListService(taskRepository)

        const userCreated = await userCreateService.execute(user)

        const task1 = {
            titulo: "Testando integraçao da api",
            descricao: "Elaborar teste de integração",
            user_id: userCreated.user_id
        }

        const task2 = {
            title: "Testando integração da api",
            description: "Elaborar testes de integração",
            user_id: userCreated.user_id
        }

        await taskCreateService.execute(task1)
        await taskCreateService.execute(task2)

        const list = await taskListService.execute()
        expect(list).toEqual(expect.arrayContaining(list))

    })

})