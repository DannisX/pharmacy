const { redis_config } = require('../config')
const Redis = require('ioredis')
const redis = new Redis(redis_config);

const setRedisItem = async (key, value, expire) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await redis.set(key, value)
            if (data === 'OK' && expire) {
                const res = await redis.expire(key, expire)
                return resolve(res)
            }
            return resolve(data)
        } catch (err) {
            return reject(err)
        }
    })
}

const getRedisItem = async (key) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await redis.get(key);
            return resolve(data)
        } catch (err) {
            return reject(err)
        }
    })
}

module.exports = {
    setRedisItem,
    getRedisItem
}