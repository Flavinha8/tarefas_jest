


class TaskListByIdService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({taskId}) {
        const task = await this.taskRepository.listTaskById({taskId})
        return task
    }
}

module.exports = TaskListByIdService