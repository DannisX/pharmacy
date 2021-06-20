const router = require('koa-router')();

const UserRouter = require('./User');

router.use(UserRouter.routes(), UserRouter.allowedMethods())


module.exports = router