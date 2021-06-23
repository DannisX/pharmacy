// const session = require('koa-session2')

const Redis = require('ioredis')
const { Store } = require('koa-session2')

class RedisStore extends Store {

    constructor(redis_config) {
        super();
        this.redis = new Redis(redis_config)
    }
    // 获取session
    get = async (sid, ctx) => {
        return new Promise(async (resolve, reject) => {
            const data = await this.redis.get(`SESSION:${sid}`)
            return resolve(JSON.parse(data))
        })
    }
    // 根据选项设置session
    set = async (session, { sid = this.getID(24), maxAge = 1000000 } = {}, ctx) => {
        return new Promise(async (resolve, reject) => {
            try {
                await this.redis.set(`SESSION:${sid}`, JSON.stringify(session), 'EX', maxAge / 1000)
                return resolve(sid)
            } catch (e) {
                return resolve(sid)
            }
        })
    }
    // 删除项
    destroy = async (sid, ctx) => {
        return new Promise(async (resolve, reject) => {
            const res = await this.redis.del(`SESSION:${sid}`)
            return resolve(res)
        })
    }
}


module.exports = RedisStore;