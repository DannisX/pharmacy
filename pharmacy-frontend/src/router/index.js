export const routes = [
    {
        to: '/',
        component: 'Home',
        title: '首页'
    },
    {
        to: "/medicine",
        component: "Medicine",
        title: "药品管理",
        children: [
            {
                to: "/medicine/input",
                component: "MedicineInput",
                title: "药品录入"
            },
            {
                to: "/medicine/query",
                component: "MedicineQuery",
                title: "药品查找"
            },
            {
                to: "/medicine/unexpected",
                component: "MedicineUnexpected",
                title: "库存异动"
            },
        ]
    },
    {
        to: '/member',
        component: "Member",
        title: "会员管理",
        children: [
            {
                to: "/member/manage",
                component: "MemberManage",
                title: "会员管理"
            },
            {
                to: "/member/rewards",
                component: "MemberRewards",
                title: "积分兑换"
            },
            {
                to: "/member/message",
                component: "MemberMessage",
                title: "短信群发"
            }
        ]
    },
    {
        to: "/user",
        component: "User",
        title: "用户管理",
        children: [
            {
                to: "/user/cashier",
                component: "Cashier",
                title: "收银员"
            },
            {
                to: "/user/saler",
                component: "Saler",
                title: "销售员"
            }
        ]
    },
    {
        to: "/count",
        component: "Count",
        title: "统计查询",
        children: [
            {
                to: "/count/daily",
                component: "DailyCount",
                title: "日汇总"
            },
            {
                to: "/count/monthly",
                component: "MonthlyCount",
                title: "月汇总"
            },
            {
                to: "/count/yearly",
                component: "YearlyCount",
                title: "年汇总"
            },
            {
                to: "/count/rest",
                component: "RestCount",
                title: "库存统计"
            }
        ]
    },
    {
        to: "/settings",
        component: "Settings",
        title: "系统设置",
        children: [
            {
                to: "/settings/backstage",
                component: "Backstage",
                title: "后台设置"
            },
            {
                to: "/settings/checkoutcounter",
                component: "CheckoutCounter",
                title: "收银台设置"
            }
        ]
    },
    {
        to: "/about",
        component: "About",
        title: "关于我们"
    },
    {
        to: "/login",
        component: "Login",
        title: "登录"
    },
    {
        to: "/register",
        component: "Register",
        title: "注册"
    }
]

