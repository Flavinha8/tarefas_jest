


class TaskUpdateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({title, description, taskId}) {
        return await this.taskRepository.updateTask({title, description, taskId})
     
    }
}

module.exports = TaskUpdateService