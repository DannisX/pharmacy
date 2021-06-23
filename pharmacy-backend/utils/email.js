const nodemailer = require('nodemailer')
const moment = require('moment');

exports.sendVerifyEmail = ({ user_id, email, verify_key }) => {
    // 设置发送邮箱服务器的配置信息
    let transporter = nodemailer.createTransport({
        host: "smtp.163.com",
        port: 465,
        secure: true,
        auth: {
            user: "dannisx@163.com",
            pass: "ENEDQVGENSFDZXJC"
        }
    })

    let sendTime = moment().format('MMMM Do YYYY,h:mm:ss a')
    let mailOptions = {
        from: "dannisx@163.com",
        to: `${email}`,
        subject: `验证邮件<${email}>`,
        text: "这是一封邮箱验证邮件",
        html:
            `点击下方连接激活账户<br>
            <a href='http://localhost:8000/api/user/verify?user_id=${user_id}&verify_key=${verify_key}'>http://localhost:8000/api/user/verify?user_id=${user_id}&verify_key=${verify_key}</a>

            <br>
            <p>若是链接无法跳转，请复制链接到地址栏打开</p>
            <p>发送时间：${sendTime}</p>`
    }

    return new Promise((resolve, reject) => {
        // 发送邮件
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return reject(err);
            }
            return resolve(info);
        })
    })
}