const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory");
const TaskCreateService = require("../services/TaskServices/TaskCreateService");
const TaskUpdateService = require("../services/TaskServices/TaskUpdateService");
const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryInMemory");
const UserCreateService = require("../services/UserServices/UserCreateService");

describe("TaskUpdateService", () => {
  let userRepository = null;
  let userCreateService = null;
  let taskRepository = null;
  let taskCreateService = null;
  let taskUpdateService = null;

  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    taskRepository = new TaskRepositoryInMemory();
    userCreateService = new UserCreateService(userRepository);
    taskCreateService = new TaskCreateService(taskRepository);
    taskUpdateService = new TaskUpdateService(taskRepository);
  });

  it("should be able to update task", async () => {
    const user = {
      name: "User test",
      email: "user@test.com",
      password: "123",
    };
    const userCreated = await userCreateService.execute(user);

    const task = {
      titulo: "testando api com Jest",
      descricao: "Elaborar testes unitários na aplicação",
      user_id: userCreated.user_id,
    };

    const taskCreated = await taskCreateService.execute(task);

    taskCreated.title = "Tarefa atualizada";
    taskCreated.description = "Descrição atualizada";

    const taskUpdated = await taskUpdateService.execute(taskCreated);

    expect(taskUpdated).toHaveProperty("title", "Tarefa atualizada");
  });
});
