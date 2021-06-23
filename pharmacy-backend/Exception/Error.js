class HttpException extends Error {
    constructor(errMsg = '服务器异常', errCode = 1000, statusCode = 500) {
        super()
        this.errMsg = errMsg;
        this.errCode = errCode;
        this.statusCode = statusCode;
    }
}


module.exports = HttpException;