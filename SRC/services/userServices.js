class UserServices {

    constructor(_userRepository) {
        this.userRepository = _userRepository
    }
    async registerUser(userDetails) {
        console.log('hitting service layer')
        const user = await this.userRepository.findUser({
            email: userDetails.email,
            mobile_Number: userDetails.mobile_Number
        });
        //if user found
        if (user) {
            throw {
                reason: 'User with given Email and mobile Number already exist',
                statusCode: 400
            }
        }
        // if user not found create new user
        const newUser = await this.userRepository.createUser({
            email: userDetails.email,
            password: userDetails.password,
            first_Name: userDetails.first_Name,
            last_Name: userDetails.last_Name,
            mobile_Number: userDetails.mobile_Number

        });
        if(!newUser){
            throw{reason:"something went wrong, cannot create user",
                statusCode:500
            }
        }
        return newUser
    }
}
module.exports = UserServices;