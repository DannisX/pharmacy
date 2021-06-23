const HttpException = require('./Error')
const { ERROR_CODE, ERROR_MSG } = require('../constant/error')
const userExist = async () => {
    throw new HttpException(ERROR_MSG.USER_IS_EXIST, ERROR_CODE.USER_IS_EXIST, 400);
}

const emailExist = async () => {
    throw new HttpException(ERROR_MSG.EMAIL_IS_EXIST, ERROR_CODE.EMAIL_IS_EXIST, 400)
}

const failedVerify = async () => {
    throw new HttpException(ERROR_CODE.FAILED_VERIFY, ERROR_MSG.FAILED_VERIFY, 401);
}

module.exports = {
    userExist,
    emailExist,
    failedVerify
}