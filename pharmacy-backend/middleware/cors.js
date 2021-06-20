module.exports = () => {
    return async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*')
        await next()
    }
}