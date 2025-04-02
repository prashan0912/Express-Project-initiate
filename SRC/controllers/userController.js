// const { model } = require('mongoose')

const UserRepository = require("../repositories/userRepository");
const UserServices = require("../services/userServices");

// this function take two parameter 1.re    q 2, res


async function createUser(req, res) {
    console.log("controller called");
    //todo registration
    console.log(req.body)

    const userService = new UserServices(new UserRepository())

    try {
        const response = await userService.registerUser(req.body)
        return res.status(201).json({
            message:'successfully registered the user',
            success:true,
            data: response,
            error:{}
        })
    }
    catch(error){
        return res.status(error.statusCode).json({
            success:false,
            message: error.reason,
            data:{},
            error:error
        })

    }


    // return res.json({
    //     Message: "okk nhi",
    // });
}


module.exports = {
    createUser
}