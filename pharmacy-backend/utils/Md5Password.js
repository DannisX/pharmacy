const md5 = require('md5')

module.exports = async (val, salt) => {
    return new Promise((resolve, reject) => {
        let saltPass = md5(md5(val) + salt);
        resolve(saltPass);
    })
}