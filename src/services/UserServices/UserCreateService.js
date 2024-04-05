

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({name, email, password}) {
       return await this.userRepository.createUser({name, email, password})
    }
}

module.exports = UserCreateService