const UserRepositoryinMemory = require("../repositories/userRepository/userRepositoryInMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")
const UserUpdateService = require("../services/UserServices/UserUpdateService")
 
 
describe("UserUpdateService", () => {
    let userRepository = null
    let userCreateService = null
    let userUpdateService = null
 
    it("user should be update an user", async () =>{
        const user = {
            name: "user test",
            email: "user@teste.com",
            password: "123"
        }
 
        userRepository = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepository)
        userUpdateService = new UserUpdateService(userRepository)
 
        const userCreated = await userCreateService.execute(user)
       
        userCreated.name = "User updated",
        userCreated.email = "updated@gmail.com"
 
        const updatedUser = await userUpdateService.execute(userCreated)
 
        expect(updatedUser).toHaveProperty("email", "updated@gmail.com")
       
    })
})
