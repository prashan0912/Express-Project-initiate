const { findUser } = require("../repositories/userRepository");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXP } = require("../config/serverConfig");
async function loginUser(authDetails) {

    const email = authDetails.email;
    const plainPassword = authDetails.password;
    const user = await findUser({ email })
    if (!user) {
        throw {
            message: "No user found in given email",
            statusCode: 404,
        };
    }
    console.log("user found", user);
    const isPassWordValidated = await bcrypt.compare(plainPassword, user.password);


    if (!isPassWordValidated) {
        throw {
            message: "invalid password , please try again ",
            statusCode: 401,
        };
    }

    // if the password is validated,create a token and return it 
    const token = jwt.sign(
        { email: user.email, id: user._id },
        JWT_SECRET,
        { expiresIn: JWT_EXP });
    return token;
}
module.exports = {
    loginUser
}