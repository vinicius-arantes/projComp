const UserController = require('../UserController');
const UserModel = require('../../Models/UserModel');

jest.mock('../../Models/UserModel');

describe("User Controller", () =>{
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Should Create a User", async () => {
        const req = {
            body: {
                user_name: "usertest",
                password: "123456",
                email: "teste@gmail.com",
                avatar: "https://sitedotest.com/new-avatar",
                bio: "Perfil de teste!",
                age: "18"
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await UserController.store(req, res);

        expect(UserModel.create).toHaveBeenCalledTimes(1);
        expect(UserModel.create).toHaveBeenCalledWith({ 
            user_name: "usertest",
            password: "123456",
            email: "teste@gmail.com",
            avatar: "https://sitedotest.com/new-avatar",
            bio: "Perfil de teste!",
            age: "18"
    });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'User created successfully!'})

    })

    test("Should not Create a User", async () => {
        const req = {
            body: {
                user_name: "usertest",
                password: "123456",
                email: "teste@gmail.com",
                avatar: "https://sitedotest.com/new-avatar",
                bio: "Perfil de teste!",
                age: "18"
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        UserModel.create.mockRejectedValue(new Error("Mocking exception"));

        await UserController.store(req, res);

        expect(UserModel.create).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Unable to create a user!'})

    })

    test("Should show all Users", async () => {
        const req = {}

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        
        const users = UserModel.find();
        await UserController.index(req, res);

        expect(UserModel.find).toHaveBeenCalledTimes(2);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith( users );
    })

    test("Should not show all Users", async () => {
        const req = {}

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        UserModel.find.mockRejectedValue(new Error("Mocking exception"));
        
        await UserController.index(req, res);

        expect(UserModel.find).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "No user created yet!" });
    })

    test("Should Show a User", async () => {
        const req = {
            params: {
                id: "128398127398124",
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        const { id } = req.params;

        await UserController.show(req, res);

        expect(UserModel.findById).toHaveBeenCalledTimes(1);
        expect(UserModel.findById).toHaveBeenCalledWith( id );
        const user = UserModel.findById(id);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith( user );

    })

    test("Should not Show a User", async () => {
        const req = {
            params: {
                id: "128398127398124",
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        UserModel.findById.mockRejectedValue(new Error("Mocking exception"));

        await UserController.show(req, res);

        expect(UserModel.findById).toHaveBeenCalledTimes(1);     
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: "Verify user Id!"});

    })

    test("Should Update a User", async () => {
        const req = {
            body: {
                email: "teste@gmail.com"
            },
            params: {
                id: "128398127398124",
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        const { id } = req.params;

        await UserController.update(req, res);

        expect(UserModel.findByIdAndUpdate).toHaveBeenCalledTimes(1);
        expect(UserModel.findByIdAndUpdate).toHaveBeenCalledWith(id, { email: "teste@gmail.com" });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: "User updated successfully!" });

    })

    test("Should not Update a User", async () => {
        const req = {
            body: {
                email: "teste@gmail.com"
            },
            params: {
                id: "128398127398124",
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        UserModel.findByIdAndUpdate.mockRejectedValue(new Error("Mocking exception"));

        await UserController.update(req, res);

        expect(UserModel.findByIdAndUpdate).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: "Verify user Id!" });

    })

    test("Should Delete a User", async () => {
        const req = {
            params: {
                id: "128398127398124",
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        const { id } = req.params;

        await UserController.destroy(req, res);

        expect(UserModel.findByIdAndDelete).toHaveBeenCalledTimes(1);
        expect(UserModel.findByIdAndDelete).toHaveBeenCalledWith(id);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: "User deleted successfully!" });

    })

    test("Should not Delete a User", async () => {
        const req = {
            params: {
                id: "128398127398124",
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        UserModel.findByIdAndDelete.mockRejectedValue(new Error("Mocking exception"));

        await UserController.destroy(req, res);

        expect(UserModel.findByIdAndDelete).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: "Verify user Id!" });

    })
})