const mysql = require('mysql')
const POOLCONFIG = require('../config').database;

const pool = mysql.createPool({
    host: POOLCONFIG.HOST,
    user: POOLCONFIG.USERNAME,
    database: POOLCONFIG.DATABASE,
    port: POOLCONFIG.PORT,
    password: POOLCONFIG.PASSWORD
})


const query = (sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) return reject(err);

            conn.query(sql, val, (error, data) => {
                if (error) return reject(error);

                resolve(data)
                conn.release();
            })
        })
    })
}

const CREATE_TABLE_USER = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const sql = `CREATE TABLE IF NOT EXISTS user(
                user_id VARCHAR(255) NOT NULL COMMENT '用户ID',
                user_name VARCHAR(255) NOT NULL UNIQUE COMMENT '用户名',
                user_email VARCHAR(255) NOT NULL UNIQUE COMMENT '用户邮箱',
                user_password VARCHAR(255) NOT NULL      COMMENT '用户密码',
                user_identity INT(5) NOT NULL COMMENT '用户身份 0-开发者 1-管理员 2-收银员 3-销售员 4-仓库管理员 5-普通用户',
                user_province VARCHAR(255) NOT NULL COMMENT '用户地址省份',
                user_city VARCHAR(255) NOT NULL COMMENT '用户地址城市',
                user_area VARCHAR(255) NOT NULL COMMENT '用户地址区县',
                user_status INT(5) NOT NULL COMMENT '用户状态 0-未激活 1-已激活 2-已注销',
                salt VARCHAR(255) NOT NULL COMMENT '用户MD5加密盐值',
                PRIMARY KEY (user_id)     
            )COMMENT '用户信息表'`
            await query(sql, []);

        } catch (error) {
            reject(error)
        }
    })
}


(async () => {
    const result = await CREATE_TABLE_USER();
    console.log(result);
})()


module.exports = {
    query
}