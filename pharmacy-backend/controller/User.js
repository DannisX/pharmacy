// const { query } = require('../mysql/mysql')
// 用户数据处理模块
const { userIsExists, addUser, updateUserById } = require('../mysql/user')
// UUID模块：用于生成验证邮件
const uuid = require('node-uuid')
// 发送邮件模块
const { sendVerifyEmail } = require('../utils/email')
// 抛出异常模块
const userException = require('../Exception/user')
// 
const { setRedisItem, getRedisItem } = require('../utils/redis')

exports.register = async (ctx, next) => {

    const { user } = ctx.request
    const userInfo = await userIsExists({ user_name: user.name })
    if (userInfo.errCode === 1001) {
        // 用户已存在且已被激活过
        return userException.userExist();
    }

    const emailInfo = await userIsExists({ user_email: user.email })
    if (emailInfo.errCode === 1004) {
        // 邮箱已存在且已被激活过
        return userException.emailExist();
    }
    const verify_key = uuid.v1();
    const data = userInfo.data || emailInfo.data;

    if (data) {
        // 用户或者邮箱存在，且都没有被激活过，需重新发送验证邮件
        // 更新用户信息
        const res = await updateUserById(data.user_id, {
            user_name: user.name,
            user_email: user.email
        })
        // redis存储验证邮件的验证信息，验证id为user_id,verify_key
        await setRedisItem(res.user_id, verify_key, 300);
        // 邮件发送
        const emailRes = await sendVerifyEmail({
            user_id: res.user_id,
            email: res.user_email,
            verify_key
        })
    } else {
        // 用户和邮箱都不存在，直接添加数据
        const data = await addUser({
            user_name: user.name,
            user_email: user.email,
            user_password: user.password
        })
        // 发邮件
        const ress = await sendVerifyEmail({
            user_id: data.user_id,
            email: data.user_email,
            verify_key
        });
    }

    // 发送邮箱完成，通知
    ctx.body = {
        message: "/users/register",
        MSG: "验证邮件已发送，请点击激活邮件激活你的账户",
    }

}

exports.login = async (ctx, next) => {

    ctx.body = {
        message: "/users/login"
    }

}
exports.getUserProfile = async (ctx) => {
    ctx.body = {
        message: "/getUserProfile",
        // data
    }
}

exports.getUserStatus = async (ctx) => {
    ctx.body = {
        message: "/getUserStatus"
    }
}
exports.addressModify = async (ctx) => {
    ctx.body = {
        message: "/address"
    }
}
exports.phoneNumModify = async (ctx) => {
    ctx.body = {
        message: "/phonenum"
    }
}
exports.emailModify = async (ctx) => {
    ctx.body = {
        message: "/email"
    }
}
exports.passwordmodify = async (ctx) => {
    ctx.body = {
        message: "/password"
    }
}
exports.avatarModify = async (ctx) => {
    ctx.body = {
        message: "/avatar"
    }
}

exports.freshAccessToken = async (ctx) => {
    ctx.body = {
        message: "/refresh_access_token"
    }
}

exports.verify = async (ctx) => {
    const { user_id, verify_key } = ctx.query
    const data = await getRedisItem(user_id)
    if (verify_key === data) {
        await updateUserById(user_id, { user_status: 1 })
        ctx.redirect(`http://192.168.3.232:8080/login`)
    } else {
        return userException.failedVerify()
    }
}