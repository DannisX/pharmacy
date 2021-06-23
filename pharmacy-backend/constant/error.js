// 自定义错误
exports.ERROR_CODE = {
    USER_INACTIVITED: 1000,          //用户未激活
    USER_IS_EXIST: 1001,
    USER_IS_NOT_EXIST: 1002,
    EMAIL_INACTIVITED: 1003,
    EMAIL_IS_EXIST: 1004,
    EMAIL_IS_NOT_EXITST: 1005,
    FAILED_VERIFY: 1010,
    TOKEN_EXPIRED: 1100,     //TOKEN失效
}

exports.ERROR_MSG = {
    USER_INACTIVITED: "用户存在但未激活",
    USER_IS_EXIST: "用户名已存在",
    USER_IS_NOT_EXIST: "用户不存在",
    EMAIL_INACTIVITED: "邮箱存在但未激活",
    EMAIL_IS_EXIST: "邮箱已被注册",
    EMAIL_IS_NOT_EXITST: "邮箱不存在",
    FAILED_VERIFY: "验证链接失效或被篡改",
    TOKEN_EXPIRED: "TOKEN已失效"
}




// error格式
// 响应格式:
// statusCode
// {
//     errMsg:"",
//     errCode:"",
//     data,
// }