const JOI = require('joi')

exports.register = async (ctx, next) => {
    const data = ctx.request.body;
    // 定义验证规则
    let schema = JOI.object().keys({
        // 名字2-10位必填
        name: JOI.string().min(2).max(10).required(),
        // 邮箱域名至少两位
        email: JOI.string().email({ minDomainAtoms: 2 }),
        // password 6到16位字符密码
        password: JOI.string().regex(/^[a-z0-9A-Z]{6,16}$/),
        pwdConfirm: JOI.string()
    })
        // 密码和密码确认必填
        .with('password', 'pwdConfirm')

    const result = JOI.validate(data, schema, {
        // 允许出现多余字段
        allowUnknown: true,
        // 不止打印第一条错误信息
        abortEarly: false
    })
    // console.log(result);
    // result.then(res => console.log(res));
    result.catch(err => console.log(err))
    console.log(data);
    await next()
}