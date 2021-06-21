const nodemailer = require('nodemailer')
const moment = require('moment');
nodemailer.createTestAccount((err, account) => {
    // 设置发送邮箱服务器的配置信息





})

exports.sendVerifyEmail = ({ user_id, eamil, verfify_key }) => {
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
        to: `${eamil}`,
        subject: `这是一封验证用的邮件`,
        text: "这是一封邮箱验证邮件",
        html:
            `点击下方连接激活账户<br>
            <a href='http://localhost:8000/api/user/verify?id=${user_id}&verify_key=${verfify_key}'>http://localhost:8000/api/user/verify?id=${user_id}&verify_key=${verfify_key}</a>
            <br>
            <p>发送时间：${sendTime}</p>`
    }

    // 发送邮件
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        console.log('邮件发送成功');
    })
}