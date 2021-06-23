const HttpException = require('../Exception/Error')
module.exports = async (ctx, next) => {
    try {
        await next();
        if (!ctx.body) {
            ctx.status = 404
            ctx.body = {
                errMsg: "404 NOT FOUND"
            }
        }


    } catch (error) {
        if (error instanceof HttpException) {
            ctx.status = error.statusCode;
            return ctx.body = {
                errCode: error.errCode,
                errMsg: error.errMsg
            }
        }
        console.log(error);
        ctx.status = 500
        ctx.body = {
            error
        }
    }
}