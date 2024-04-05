

class TaskCreateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({titulo, descricao, user_id}) {
        const taskCreated = await this.taskRepository.createTask({titulo, descricao, user_id})
        return taskCreated
    }
}

module.exports = TaskCreateService