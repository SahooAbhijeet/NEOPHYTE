const UserService = require('../services/user-service')

const userService = new UserService();

const signUp = async (req, res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created the new user',
            data: response,
            error: {}
        });
    } catch (error) {
       return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        error: err
       });
    }
}

const logIn = async (req, res) => {
    try {
        console.log('Comming inside', req.body);
        const token = await userService.signIn(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            error: {}
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
};


module.exports = {
    signUp,
    logIn
}