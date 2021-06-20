// 引入并创建router对象
const router = require('koa-router')();
// 引入路由处理程序
const UserCtrl = require('../controller/User')



// 注册=>验证数据正确性=>验证用户状态=>生成验证邮件=>发送验证邮件=>通知已经发送邮件
router.post('/users/register', UserCtrl.register);
// 登录
router.post('/users/login', UserCtrl.login);
// 获取当前用户信息
router.get('/user', UserCtrl.getUserProfile);
// 修改用户住址
router.put('/user/address', UserCtrl.addressModify);
// 手机号修改
router.put('/user/phonenum', UserCtrl.phoneNumModify)
// 邮箱修改
router.put('/user/email', UserCtrl.emailModify)
// 密码修改
router.put('/user/password', UserCtrl.passwordmodify)
// 

module.exports = router
