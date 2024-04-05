const UserRepositoryinMemory = require("../repositories/userRepository/userRepositoryInMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")
const UserListService = require("../services/UserServices/UserListService")
const UserDeleteService = require("../services/UserServices/UserDeleteService") 

describe("UserDeleteService", () => {
    let userRepository = null
    let userCreateService = null
    let userListService = null
    let userDeleteService = null

 
    it("should be possible delete an users", async () =>{
        userRepository = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)


        const user = {
            name: "user test 1",
            email: "user1@teste.com",
            password: "123"
        }
        
        await userCreateService.execute(user)
        
        await userDeleteService.execute(user);
       
        const users = await userListService.execute(user)
 
        expect(users).toHaveLength(0)    
    })

    it("user should be possible delete an specific user", async () => {
        userRepository = new UserRepositoryinMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)

        const user1 = {
            name: "user test 1",
            email: "user1@teste.com",
            password: "123"
    }
    const user2 = {
        name: "user test 1",
        email: "user1@teste.com",
        password: "123"
    }
    
    const firstUser = await userCreateService.execute(user1) 
    const secondUser = await userCreateService.execute(user2)
    
    const list = await userListService.execute()

    await userDeleteService.execute(firstUser)
    
    expect(list).not.toHaveProperty("name", "user test 1")

    await userDeleteService.execute(secondUser)

    expect(list).not.toHaveProperty("name", "user test 2")
})
})