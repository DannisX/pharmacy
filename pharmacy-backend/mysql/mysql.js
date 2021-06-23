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
                user_id VARCHAR(255) NOT NULL UNIQUE COMMENT '用户ID',
                user_name VARCHAR(255) NOT NULL UNIQUE COMMENT '用户名',
                user_avatar VARCHAR(255) NOT NULL DEFAULT 'https://static01.imgkr.com/temp/4e6244db873a40cebd88047a871a8318.jpg' COMMENT '用户头像',
                user_email VARCHAR(255) NOT NULL UNIQUE COMMENT '用户邮箱',
                user_password VARCHAR(255) NOT NULL      COMMENT '用户密码',
                user_identity INT(5) NOT NULL DEFAULT 5 COMMENT '用户身份 0-开发者 1-管理员 2-收银员 3-销售员 4-仓库管理员 5-普通用户',
                user_phone INT(11) DEFAULT NULL COMMENT '用户手机号',
                user_province VARCHAR(255) DEFAULT NULL COMMENT '用户地址省份',
                user_city VARCHAR(255) DEFAULT NULL COMMENT '用户地址城市',
                user_area VARCHAR(255) DEFAULT NULL COMMENT '用户地址区县',
                user_addr_detail VARCHAR(255) DEFAULT NULL COMMENT '用户详细地址',
                user_status INT(5) NOT NULL DEFAULT 0 COMMENT '用户状态 0-未激活 1-已激活 2-已注销',
                salt VARCHAR(255) NOT NULL UNIQUE COMMENT '用户MD5加密盐值',
                user_refresh_token VARCHAR(255) DEFAULT NULL COMMENT '用户刷新令牌',
                created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
                updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
                PRIMARY KEY (user_id)     
            )COMMENT '用户信息表'`
            const result = await query(sql, []);
            return resolve(result)
        } catch (error) {
            return reject(error)
        }
    })
}


(async () => {
    const result = await CREATE_TABLE_USER();
    // console.log(result);
})()


module.exports = {
    query
}