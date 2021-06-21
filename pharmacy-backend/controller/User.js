const { query } = require('../mysql/mysql')

const { findOne, find, insert } = require('../mysql/base')

const uuid = require('node-uuid')
// 数据加密模块
const MD5 = require('../utils/Md5Password')

const { sendVerifyEmail } = require('../utils/email')

exports.register = async (ctx, next) => {
    try {
        const sql = `SELECT * FROM user`

        const data = await query(sql, []);

        ctx.body = {
            message: "/users/register",
            data
        }
    } catch (error) {
        next(error)
    }
}

exports.login = async (ctx, next) => {
    try {
        const data = await find('user', 'user_name', 'DannisX')
        let salt = uuid.v1();
        const result = await insert('user', {
            user_id: uuid.v1(),
            user_name: "Dan",
            user_email: "1486177764@qq.com",
            user_password: await MD5('Claire950305', salt),
            user_identity: 5,
            user_province: "湖南省",
            user_city: "衡阳市",
            user_area: "衡东县",
            user_status: 1,
            salt,
        })
        sendVerifyEmail({
            user_id: "d2e60111-d28e-11eb-b374-49e04d13fb37",
            eamil: "1486177764@qq.com",
            verfify_key: "4221d8b75e7f04469a679a47c502d54d"
        })
        ctx.body = {
            message: "/users/login",
            data,
            result
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.getUserProfile = async (ctx) => {
    ctx.body = {
        message: "/getUserProfile"
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
