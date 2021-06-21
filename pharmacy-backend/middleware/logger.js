module.exports = () => {
    return async (ctx, next) => {
        let start = Date.now();
        await next()
        let interval = Date.now() - start;
        console.log(`${ctx.request.method}  ${ctx.request.url}  ---${interval}ms`);
    }
}