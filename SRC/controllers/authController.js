
const { loginUser } = require('../services/authService')
async function login(req, res) {

    try {
        const loginPayload = req.body;
        const response = await loginUser(loginPayload);

        res.cookie("authToken", response, {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7// 7 day
        });

        return res.status(200).json({
            success: true,
            message: 'logged in success',
            date: {},
            error: {}
        })

    } catch (error) {

        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            date: {},
            error: error
        })
    }
}

module.exports = {
    login
}