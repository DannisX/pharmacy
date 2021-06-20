
exports.register = async (ctx) => {
    ctx.body = {
        message: "/users/register"
    }
}

exports.login = async (ctx) => {
    ctx.body = {
        message: "/users/login"
    }
}
exports.getUserProfile = async (ctx) => {
    ctx.body = {
        message: "/getUserProfile"
    }
}
exports.addressModify = async (ctx) => {
    ctx.body = {
        message: "/address"
    }
}
exports.phoneNumModify = async (ctx) => {
    ctx.body = {
        message: "/phonenum"
    }
}
exports.emailModify = async (ctx) => {
    ctx.body = {
        message: "/email"
    }
}
exports.passwordmodify = async (ctx) => {
    ctx.body = {
        message: "/password"
    }
}
