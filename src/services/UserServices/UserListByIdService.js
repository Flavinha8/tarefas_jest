



class UserListByIdService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({user_id}) {
        const user = await this.userRepository.listUserById({id: user_id})
        return user
    }
}

module.exports = UserListByIdService