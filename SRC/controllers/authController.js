
const loginUser = require('../services/authService')
async function login(req, res) {
    // console.log(req.body)

    try {
        const loginPayload = req.body;
        // console.log(req.body)
        const response = await loginUser(loginPayload);
        // console.log(req.body)

        return res.status(200).json({
            success: true,
            message: 'logged in success',
            date: { response },
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