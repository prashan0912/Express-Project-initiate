const { findUser, createUser } = require("../repositories/userRepository");

async function registerUser(userDetails) {
    console.log('hitting service layer', userDetails)
    const user = await findUser({
        email: userDetails.email,
        mobileNumber: userDetails.mobileNumber
    });
    //if user found
    if (user) {
        throw {
            reason: 'User with given Email and mobile Number already exist',
            statusCode: 400,
        }
    }
    //         // if user not found create new user
    const newUser = await createUser({
        email: userDetails.email,
        password: userDetails.password,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        mobileNumber: userDetails.mobileNumber

    });
    if (!newUser) {
        throw {
            reason: "something went wrong, cannot create user",
            statusCode: 500
        }
    }
    return newUser
}
module.exports = {
    registerUser,
};