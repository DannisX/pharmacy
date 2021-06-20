// 引入koa
const Koa = require('koa')
// 引入fs模块
const fs = require('fs')
// 引入cors模块解决跨域问题
const cors = require('./middleware/cors')
// 引入logger模块打印日志
const logger = require('./middleware/logger')
// 引入path模块
const path = require('path')
// 引入路由
const router = require('./router')
// 创建应用程序
const app = new Koa();
// ======================================================================中间件使用============================================================


// 使用cors模块中的函数解决跨域问题
app.use(cors())
// 使用logger模块打印日志
app.use(logger())
// 端口号配置引入
const PORT = require('./config').port
// 路由使用
router.prefix('/api')
app.use(router.routes(), router.allowedMethods());

// 错误处理中间件（一定放最后）
// app.use("错误处理中间件")


// =====================================================================端口监听启动===========================================================
app.listen(PORT, () => {
    console.log(`\nServer is running at port ${PORT} now\n`)
});
