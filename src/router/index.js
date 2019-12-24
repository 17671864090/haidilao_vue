import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes:[
        // {
        //     path:"/",
        //     component:resolve=>require(["@/App.vue"],resolve),
        // },
        {
            path:"/login",
            component:resolve=>require(["@/components/Loginvue"],resolve),
            meta: {
                title: '登录123'
            }
        },
        {
            path:"/",
                component:resolve=>require(["@/components/list"],resolve),
            meta: {
                requiresAuth: true,
                title: '海底捞提卡平台'
            }

        },
        {
            path:"/home",
            component:resolve=>require(["@/components/list"],resolve),
            meta: {
                title: '海底捞提卡平台',
                requiresAuth: true
            }
        },
        {
            path:"/links/order/:id",
            component:resolve=>require(["@/components/listorder"],resolve),
            meta: { requiresAuth: true }

        },
        {
            path:"/links/orderquery/:id",
            component:resolve=>require(["@/components/orderquery"],resolve),
            meta: {
                requiresAuth: true,
                title: '订单查询'
            }
        },
        // 后台管理入口
        {
                path:"/admins",
            component:resolve=>require(["@/components/admin/index"],resolve),
            meta: {
                requiresAuth: true,
                title: '后台管理'
            },
            children:[
                {
                    //客户管理
                    path:"/admins/customerlist",
                    component:resolve=>require(["@/components/admin/customerlist"],resolve),
                    meta: { requiresAuth: true }
                },

                {
                    //管理
                    path:"/admins/orderlist",
                    component:resolve=>require(["@/components/admin/orderlist"],resolve),
                    meta: { requiresAuth: true }
                },

                //客户账户编辑
                {
                    path:"/admins/editcustomerlist/:id",
                    component:resolve=>require(["@/components/admin/editcustomerlist"],resolve),
                    meta: { requiresAuth: true }
                },

                // 账户充值
                {
                    path:"/admins/editcustomer/:id",
                    component:resolve=>require(["@/components/admin/editcustomer"],resolve),
                    meta: { requiresAuth: true }
                },

                // 卡密管理
                {
                    path:"/admins/goods_card",
                    component:resolve=>require(["@/components/admin/goods_card"],resolve),
                    meta: { requiresAuth: true }
                },
                // 添加卡密
                {
                    path:"/admins/addgoods_card",
                    component:resolve=>require(["@/components/admin/addgoods_card"],resolve),
                    meta: { requiresAuth: true }
                },
            ]
        },
    ],
});
router.beforeEach((to,from,next)=>{
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    let token = localStorage.getItem('LoginUser');
    if (to.meta.requiresAuth) {
        if (token) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            });
        }
    } else {
        next(); //如果无需token,那么随它去吧
    }
    if(to.path == '/login'){
        if (token) {
            next({
                path: '/'
            })
        }else {
            next()
        }
    }
});
export default router