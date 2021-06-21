module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        if (error.errorcode) {
            console.log("捕获到异常");
            return ctx.body = error.msg;
        }
    }
}