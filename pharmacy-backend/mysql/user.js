// 数据库操作基本模块
const { find, findOne, insert } = require('./base')
// 随机id模块：用于ID以及加盐
const uuid = require('node-uuid')
// 
const MD5 = require('../utils/Md5Password')

const { ERROR_CODE, ERROR_MSG } = require('../constant/error')
const { query } = require('./mysql')

/**
 * 根据用户名或者邮箱查找对应的用户状态
 * @param {*} data 一个对象，对象的键名可以是user_name或者user_email,否则报参数错误
 * @returns 
 */
const userIsExists = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { user_name } = data;
            if (user_name) {
                const userInfo = await findOne('user', { user_name })
                if (userInfo) {
                    if (userInfo.user_status !== 0) {
                        return resolve({
                            errCode: ERROR_CODE.USER_IS_EXIST,
                            errMsg: ERROR_MSG.USER_IS_EXIST,
                        })
                    } else {
                        return resolve({
                            errCode: ERROR_CODE.USER_INACTIVITED,
                            errMsg: ERROR_MSG.USER_INACTIVITED,
                            data: userInfo
                        })
                    }
                } else {
                    return resolve({
                        errCode: ERROR_CODE.USER_IS_NOT_EXITST,
                        errMsg: ERROR_MSG.USER_IS_NOT_EXITST
                    })
                }
            }

            const { user_email } = data;
            if (!user_name && !user_email) return reject('参数错误')

            if (user_email) {
                const emailInfo = await findOne('user', { user_email })
                if (emailInfo) {
                    if (emailInfo.user_status !== 0) {
                        return resolve({
                            errCode: ERROR_CODE.EMAIL_IS_EXIST,
                            errMsg: ERROR_MSG.EMAIL_IS_EXIST,
                        })
                    } else {
                        return resolve({
                            errCode: ERROR_CODE.EMAIL_INACTIVITED,
                            errMsg: ERROR_MSG.EMAIL_INACTIVITED,
                            data: emailInfo
                        })
                    }
                } else {
                    return resolve({
                        errCode: ERROR_CODE.EMAIL_IS_NOT_EXITST,
                        errMsg: ERROR_MSG.EMAIL_IS_NOT_EXITST
                    })
                }
            }

        } catch (error) {
            return reject(error)
        }
    })
}

/**
 * 
 * @param {*} data 传入一个对象其中至少包含user_name,user_email,user_password参数 
 * @returns 返回一个添加后的结果数据对象
 */
const addUser = async ({ user_name, user_email, user_password }) => {
    return new Promise(async (resolve, reject) => {
        try {
            // 添加数据
            const salt = uuid.v1();
            const res = await insert('user', {
                user_id: uuid.v1(),
                user_name,
                user_email,
                user_password: await MD5(user_password, salt),
                salt

            })
            // 添加后的数据
            const data = await findOne('user', {
                user_name
            })
            return resolve(data)
        } catch (error) {
            return reject(error)
        }
    })
}

const updateUserById = async (user_id, target) => {
    return new Promise(async (resolve, reject) => {

        if (!user_id || !target) return reject('传入参数错误');

        const user = await findOne('user', { user_id });
        if (!user) return reject('找不到该数据')

        const keys = Object.keys(target)
        const values = Object.values(target)
        let options = ''
        for (let i = 0; i < keys.length; i++) {
            if (i === 0) {
                options = `${keys[i]}=?`
            } else {
                options += `,${keys[i]}=?`
            }
        }

        const sql = `UPDATE user SET ${options} WHERE user_id = '${user_id}'`;
        const res = await query(sql, values);
        const data = await findOne('user', { user_id })
        resolve(data)
    })
}


module.exports = {
    userIsExists,
    addUser,
    updateUserById
}