<template>
    <div class="conbox">
        <div class="conmain login">
            <div class="logo">
                    <img style="margin: 0 auto" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3462250608,2257798544&fm=26&gp=0.jpg">
            </div>
            <form>
                <div>
                    <input type="text" placeholder="请输入登录账号" v-model="data.user_name">
                </div>
                <div>
                    <input type="password" placeholder="请输入密码" v-model="data.password">
                </div>
                <el-row>
<!--                    <el-button @click="clicklogin">登录</el-button>-->
                    <el-button @click="clicklogin" type="primary" :loading="loading">{{title}}</el-button>

                </el-row>


            </form>
            <div class="logintxt">
                <span><p >登录时自动注册</p></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { login } from "../api/apilist";
    export default {
        name: "Loginvue",
        data(){
            return{
                data:{
                    user_name:'',
                    password:''
                },
                loading:false,
                title:"登录"
            }
        },
        methods:{
            async clicklogin(){
                this.loading = true
                this.title = "加载中"
                const data = await login(this.data)
                if(data.status){
                    localStorage.setItem("LoginUser",data.token)
                    console.log(this.$route.query)
                    if(JSON.stringify(this.$route.query) == "{}"){
                        this.$router.push({path:'/home'})
                    }else{
                        this.$router.push({path:this.$route.query.redirect})
                    }
                }else{

                    this.loading = false
                    this.title = "登录"

                    alert(data.message)
                }
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "index.css"
</style>