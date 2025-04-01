const dotenv = require('dotenv')//  env process
dotenv.config(); // env process

module.exports={
    PORT :process.env.PORT,
    DB_URL :process.env.DB_URL
}