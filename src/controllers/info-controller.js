const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'API is working and is Live now',
        error: {},
        data: {},
    });
}
module.exports = {
    info
}