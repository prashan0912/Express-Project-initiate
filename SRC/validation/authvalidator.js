const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig');

async function isLongedIn(req, res, next) {
    // try {
    const token = req.cookies['authToken'];
    if (!token) {
        return res.status(401).json({
            success: false,
            data: {},
            error: 'Not authorized',
            message: 'no  auth token provided',
        });
    }
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded) {
        return res.status(401).json({
            success: false,
            data: {},
            error: 'Not authorized',
            message: 'invalid auth token provided',
        });
    }
    req.user = {
        email: decoded.email,
        id: decoded.id,
    }
    next();
}

module.exports = {
    isLongedIn,
};