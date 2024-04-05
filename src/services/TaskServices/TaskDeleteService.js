

class TaskDeleteService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({taskId}) {
        return await this.taskRepository.deleteTask({taskId})
        
    }
}

module.exports = TaskDeleteService