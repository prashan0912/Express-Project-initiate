const dotenv = require('dotenv')//  env process
dotenv.config(); // env process

module.exports={
    PORT :process.env.PORT,
    DB_URL :process.env.DB_URL,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXP:process.env.JWT_EXP
}