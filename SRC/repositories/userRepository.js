const User = require('../scema/userSchema')


async function findUser(parameters) {
    try {
        const response = await User.findOne({ ...parameters })
        return response; //shayad true ya false
    } catch (error) {
        console.log("user already exist", error);
    }
}

async function createUser(userDetails) {
    try {
        const response = await User.create(userDetails);
        return response;
    } catch (error) {
        console.log(error, "error in creating user");
    }
}

// return data details of created user
module.exports = {
    findUser,
    createUser
};