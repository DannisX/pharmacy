const { query } = require('./mysql')

/**
 * @param {} table 要查找数据的表名
 * @param {} key 查找条件键名，可以是字符串（单个条件）或者字符串数组（多个条件），也可以是对象（单个或者多个条件，当传入对象时，无需再传入查询条件值参数）
 * @param {} value 查找条件键值，字符串（单个条件）或者字符串数组（多个条件）
 * @returns 返回promise，当传入参数错误时返回错误信息，否则返回false（找不到符合条件的数据）或者找到的第一条符合条件的数据
 */
exports.findOne = async (table, key, value) => {
    return new Promise(async (resolve, reject) => {
        // 如果没有传入key和value，则返回false
        if (!key) return reject('缺少参数');
        // 否则判断传入值属性
        if (typeof key === 'object') {
            if (!Array.isArray(key)) {
                try {
                    const keys = Object.keys(key);
                    const values = Object.values(key);
                    if (!keys.length) return reject('传入了一个空对象');
                    let conditions = ''
                    for (let i = 0; i < keys.length; i++) {
                        if (i === 0) {
                            conditions = `${keys[i]}=?`
                        } else {
                            conditions += `AND ${keys[i]}=?`
                        }
                    }
                    const sql = `SELECT * FROM ${table} WHERE ${conditions}`
                    const data = await query(sql, values)
                    if (!data.length) return resolve(false);
                    return resolve(data[0]);
                } catch (error) {
                    return reject(error)
                }
            } else if (!value || !Array.isArray(value)) {
                return reject('未传入条件值或传入的值不是数组');
            } else {
                try {
                    let conditions = '';
                    for (let i = 0; i < key.length; i++) {
                        if (i === 0) {
                            conditions = `${key[i]}=?`
                        } else {
                            conditions += `AND ${key[i]}=?`
                        }
                    }
                    const sql = `SELECT * FROM ${table} WHERE ${conditions}`
                    const data = await query(sql, value)
                    if (!data.length) return resolve(false);

                    return resolve(data[0]);
                } catch (error) {
                    return reject(error)
                }
            }
        } else if (typeof key === 'string') {
            try {
                if (!value || typeof value !== 'string') return reject('未传入条件值或传入的值不是字符串')
                const sql = `SELECT * FROM ${table} WHERE ${key} = ?`
                const data = await query(sql, value)
                if (!data.length) return resolve(false);

                return resolve(data[0]);
            } catch (error) {
                return reject(error)
            }
        } else {
            return reject('参数格式错误')
        }
    })
}

/**
 * @param {} table 要查找数据的表名
 * @param {} key 查找条件键名，可以是字符串（单个条件）或者字符串数组（多个条件），也可以是对象（单个或者多个条件，当传入对象时，无需再传入查找值参数）
 * @param {} value 查找条件键值，字符串（单个条件）或者字符串数组（多个条件）
 * @returns 返回promise，当传入参数错误时返回错误信息，否则返回false（找不到符合条件的数据）或者找到的所有符合条件的数据
 */
exports.find = async (table, key, value) => {
    return new Promise(async (resolve, reject) => {
        // 如果没有传入key和value，则返回false
        if (!key) return reject('缺少参数');
        // 否则判断传入值属性
        if (typeof key === 'object') {
            if (!Array.isArray(key)) {
                try {
                    const keys = Object.keys(key);
                    const values = Object.values(key);
                    if (!keys.length) return reject('传入了一个空对象');
                    let conditions = ''
                    for (let i = 0; i < keys.length; i++) {
                        if (i === 0) {
                            conditions = `${keys[i]}=?`
                        } else {
                            conditions += `AND ${keys[i]}=?`
                        }
                    }
                    const sql = `SELECT * FROM ${table} WHERE ${conditions}`
                    const data = await query(sql, values)
                    if (!data.length) return resolve(false);
                    return resolve(data);
                } catch (error) {
                    return reject(error)
                }
            } else if (!value || !Array.isArray(value)) {
                return reject('未传入条件值或传入的值不是数组');
            } else {
                try {
                    let conditions = '';
                    for (let i = 0; i < key.length; i++) {
                        if (i === 0) {
                            conditions = `${key[i]}=?`
                        } else {
                            conditions += `AND ${key[i]}=?`
                        }
                    }
                    const sql = `SELECT * FROM ${table} WHERE ${conditions}`
                    const data = await query(sql, value)
                    if (!data.length) return resolve(false);

                    return resolve(data);
                } catch (error) {
                    return reject(error)
                }
            }
        } else if (typeof key === 'string') {
            try {
                if (!value || typeof value !== 'string') return reject('未传入条件值或传入的值不是字符串')
                const sql = `SELECT * FROM ${table} WHERE ${key} = ?`
                const data = await query(sql, value)
                if (!data.length) return resolve(false);

                return resolve(data);
            } catch (error) {
                return reject(error)
            }
        } else {
            return reject('参数格式错误')
        }
    })
}

exports.insert = async (table, data) => {
    return new Promise(async (resolve, reject) => {
        if (!table || !data) return reject('缺少参数')
        if (typeof data === 'object') {
            try {
                const keys = Object.keys(data);
                const values = Object.values(data);
                let key = ``;
                let value = ``;
                for (let i = 0; i < keys.length; i++) {
                    if (i === 0) {
                        key = keys[i]
                        value = `?`
                    } else {
                        key += `,${keys[i]}`
                        value += `,?`
                    }
                }
                const sql = `INSERT INTO ${table} (${key}) VALUES (${value}) `
                const result = await query(sql, values)
                return resolve(result)
            } catch (error) {
                return reject(error)
            }
        } else {
            return reject('插入数据不是一个对象')
        }
    })
}

