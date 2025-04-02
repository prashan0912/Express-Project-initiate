const User = require('../scema/userSchema')

class UserRepository {

    async findUser(parameters) {
        try{  const response = await User.findOne({ ...parameters })
        return response; //shayad true ya false
        }catch(error){
            console.log("error")
        }
    }

    async createUser(userDetails){
        try{ const response = await User.create(userDetails);
        return response;
        }catch(error){
            console.log(error)

        }
    }
    // return data details of created user 

}
module.exports = UserRepository;