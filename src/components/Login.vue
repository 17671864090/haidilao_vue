<template>
    <div id="auth">
        <div id="login-panel">
            <div id="login-header">
                <h1 class="text-center" style="padding-top: 20px">
                    <b style="color: #092756">海底捞管理中心</b>
                </h1>
            </div>
            <form name="auth_login" action="" method="post" role="form" id="auth_login">
                <div class="form-group">
                    <label>用户名</label>
                    <input type="text" name="username" class="form-control" placeholder="番号" v-model="tableData.username"/>
                </div>
                <div class="form-group">
                    <label>密码</label>
                    <input type="password" name="password" class="form-control" placeholder="暗号" v-model="tableData.password"/>
                </div>
                <p class="text-center">
                    <button type="button" class="btn btn-primary" @click="onSubmit()">登陆</button>
                </p>
            </form>
        </div>
    </div>
</template>
<script>
    import { getlogin  } from '../api/apilist'

    export default {
        name: "Login",
        data() {
            return {
                tableData: {
                    username: '',
                    password: '',
                },
                info:null
            }
        },
        methods:{
            async onSubmit(){
                const that = this
                await getlogin().then((response) =>{
                    sessionStorage.setItem("user_id", response.data.token);
                    if(response.code == 200){
                        that.$router.push({
                            path: `/admins`,
                        })
                    }else {
                        alert('密码错误')
                    }
                })
            }
        }
    }
</script>

<style lang='stylus' scoped>
    @import url(//plds.szchengji-inc.com/app/views/static/css/bootstrap.min.css);
    #login-panel {
        margin: 0 auto;
        width: 450px;
        padding: 0 30px 30px 30px;
        border: 8px solid #CCC;
        border-radius: 10px;
        background: #FFF;
        position: relative;
        top: 150px;
    }

</style>