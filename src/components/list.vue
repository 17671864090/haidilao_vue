<template>
    <div>
        <div class="top">
            <div class="img"></div>
        </div>
        <el-alert
                title="商家公告"
                type="success"
                description="账号点数充值，折扣修改，购买疑问，以及需要安排的店铺店内没有的，请联系客服yzb18357813020">
        </el-alert>
        <div style="margin-top: 10px">
            <div class="seller_form">
                <ul>
                    <li style="display: flex">
                        <van-search style="width: 90%" placeholder="搜索相关店铺 如:武汉" v-model="from.shopname" />
                        <div style="float: right;">
                            <el-button icon="el-icon-search" @click="newaapp" circle></el-button>
                        </div>
                    </li>
                    <li style="width: 100%">
                        <span style="color: rgba(83,91,127,0.6);font-size: 12px" class="form_title">店铺</span>
                        <select v-model="from.shopname" class="xr" style="width:70%">
                            <option style="display:none" value="" disabled>请选择</option>

                            <option  v-for="(item) in shop" :key="item.index" style="text-align: right" :value="item">{{item}}</option>
                        </select>
                    </li>
                    <li class="xx">
                        <span style="color: rgba(83,91,127,0.6);font-size: 12px" class="form_title">卓型</span>
                        <select  v-model="from.shoptableXing" class="xr">
                            <option style="display:none" value="" disabled>请选择</option>
                            <option  v-for="(item) in shoptableXing" :key="item.index" style="text-align: right" :value="item">{{item}}</option>
                        </select>
                    </li>
                    <li class="xx">
                        <span style="color: rgba(83,91,127,0.6);font-size: 12px" class="form_title">座位</span>
                        <select v-model="from.form" class="xr">
                            <option style="display:none" value="" disabled>请选择</option>

                            <option  v-for="(item) in data2" :key="item.index" style="text-align: right" :value="item">{{item.numbber + '号' + item.tableXing}}</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
        <div style="overflow: hidden">
            <p style="width: 100%;float: left;line-height: 44px;padding-left: 10px;font-size: 12px;">当前登录账号： <span class="pay_all tprice" style="font-size: 14px;
    font-weight: bold;
    ">{{User.user_name}}</span></p>
            <p style="width: 100%;float: left;line-height: 44px;padding-left: 10px;font-size: 12px;">当前剩余余额： <span class="pay_all tprice"  style="font-size: 18px;
    font-weight: bold;
    color: rgba(247,66,111,1);">
            {{User.balance}}元</span></p>
            <p style="width: 100%;float: left;line-height: 44px;padding-left: 10px;font-size: 12px;">当前折扣： <span class="pay_all tprice" style="font-size: 18px;
    font-weight: bold;
    color: rgba(247,66,111,1);">
            {{User.Agencydiscount / 10}}折</span></p>
        </div>
        <div class="pay_bottom" style="
        padding: 10px 0;
    bottom:44px;
    width: 100%;
    line-height: 44px;
    background: #fff;margin-bottom: 44px">
            <p style="width: 100%;float: left;line-height: 44px;padding-left: 10px;font-size: 12px;">实际付款：
                <span class="pay_all tprice" style="font-size: 18px;
    font-weight: bold;
    color: rgba(247,66,111,1);">{{price * User.Agencydiscount / 100}}元</span></p>
            <p style="width: 100%;float: left;line-height: 44px;padding-left: 10px;font-size: 12px;">商品原价：
                <span class="pay_all tprice" style="font-size: 18px;
    font-weight: bold;
    color: rgba(247,66,111,1);">{{price}}元</span></p>
            <el-button style="margin-left: 10px" @click="Signout">退出账户</el-button>
<!--            <el-button style="margin-left: 10px" @click="Signout">订单查询(待开发)</el-button>-->

        </div>
        <el-button style="width: 100%;overflow: hidden;margin: 0 auto;border-radius: 5px;height: 44px;
    font-size: 14px;
    float: right;
    border: none;
    color: #fff;
    background: #648ff7;
    position: fixed;left: 0;right: 0;bottom: 0;
"
                   type="primary"
                   @click="pay"
                   v-loading.fullscreen.lock="fullscreenLoading">提交订单
        </el-button>
    </div>
</template>
<script>
    import {getgoodslist , PlaceOrder , getgoodslistall ,getUserinfo , getgoodslistname} from '../api/apilist'
    export default {
        name: "list",
        data(){
            return{
                shop:[],
                shoptableXing:[],
                shopnumbber:[],
                data:{
                    shopname:null
                },
                from:{
                    shopname:null,
                    shoptableXing:[],
                    form:null,
                    price:null
                },
                price:0,
                data2:[{
                    price:0
                }],
                form:null,
                jiage:12,
                fullscreenLoading: false,

                User:{
                    balance:null,
                    Agencydiscount:null
                }

            }
        },
        mounted() {

            getUserinfo().then((res=>{
                this.User.balance = res.data.balance
                this.User.Agencydiscount = res.data.Agencydiscount
                this.User.user_name = res.data.user_name
            }))

            this.getlist()
        },
        methods:{
            Signout(){
                localStorage.removeItem('LoginUser')
                location.reload()            },


            openFullScreen1() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 2000);
            },
            // 获取
            getlist(){
                this.fullscreenLoading = true;
                getgoodslistall().then((res)=>{
                    this.fullscreenLoading = false;
                    if(res.data.length == 0)
                    {
                        this.$notify.error({
                            title: '抱歉  ',
                            message: '当前没有座位'
                        });
                    }else{
                        for(let i=0;i<res.data.length;i++){
                            if(this.shop.includes(res.data[i].shopname)){
                                continue
                            }else {
                                this.shop.push(res.data[i].shopname)
                            }
                        }
                        this.$notify({
                            title: '搜索成功',
                            message: `搜索${this.shop.length}条店铺`,
                            type: 'success'
                        });
                    }
                })
            },
             pay(){
                 this.fullscreenLoading = true;
                 if(!this.from.form){
                    this.$notify.error({
                        title: '错误',
                        message: '请选择座位号'
                    });
                }else{
                    if(localStorage.getItem("LoginUser")){
                        PlaceOrder(this.from).then((res)=>{
                            this.$router.push({ path: `/links/order/${res._id}`})
                        })
                    }else {
                        this.$router.push({ path: `/login`})
                    }
                }
            },
            // 监听选择店铺后
            async app(){
                this.fullscreenLoading = true;
                await getgoodslist({shopnamee:this.from.shopname}).then((res)=>{
                    this.fullscreenLoading = false;

                    `001 已被下单的`
                        if(res.code == "001"){
                            this.fullscreenLoading = false;
                            this.shoptableXing = []
                            this.$notify({
                                message: '当前店铺没有余位',
                                type: 'error'
                            });

                        }else{
                            this.from.shoptableXing = []
                            this.shoptableXing = []
                            for(let i=0;i<res.data.length;i++){
                                if(this.from.shoptableXing.indexOf(res.data[i].tableXing) !== -1){
                                    continue
                                }else {
                                    this.from.shoptableXing.push(res.data[i].tableXing)
                                }
                            }
                            this.fullscreenLoading = false;
                        }
                    })
            },
            async newaapp(){
                this.fullscreenLoading = true;
                if(this.from.shopname){
                    await getgoodslistname({shopnamee:this.from.shopname}).then((res)=>{
                        this.fullscreenLoading = false;
                        this.shop=[]
                        for(let i=0;i<res.data.length;i++){
                                    if(this.shop.includes(res.data[i].shopname)){
                                        continue
                                    }else {
                                        this.shop.push(res.data[i].shopname)
                                    }
                        }
                        this.$notify({
                            title: '搜索成功',
                            message: `搜索${this.shop.length}条店铺`,
                            type: 'success'
                        });

                    })
                }else{
                    this.getlist()
                }
            },
            async newapp(){
                this.fullscreenLoading = true;
                await getgoodslist(this.from).then((res)=>{
                    this.fullscreenLoading = false;
                    if(res.code == "001"){
                            this.from.shoptableXing = []
                            this.shoptableXing = []
                            this.fullscreenLoading = true;
                        }else{
                            for(let i=0;i<res.data.length;i++){
                                if(this.shoptableXing.indexOf(res.data[i].tableXing) !== -1){
                                    continue
                                }else {
                                    this.shoptableXing.push(res.data[i].tableXing)
                                }
                            }
                            this.fullscreenLoading = false;

                            res.data.sort(function (a,b) {
                                var value1 = a.numbber;
                                var value2 = b.numbber;
                                return value1 - value2;
                            });
                            this.data2 = res.data
                        }
                })
            },
            async asa(){
                this.price = this.from.form.price
            }
        },
        watch: {
            // 检测店铺名称变化
            'from.shopname': function(){
                this.app()
            },
            'from.shoptableXing':function () {
                this.newapp()
            },
            'from.form':function () {
                this.asa()
            },
        }
    }
</script>
<style lang="stylus" scoped>
    .top{
        .img{
            height: 200px;
            background:url(../../public/logo.jpg);
            background-size: 100% 100%;
        }

    }
    .seller_form{
        width: 100%;
        margin: 12px auto;
        li {

            padding: 5px 12px;
            height: 36px;
            line-height: 36px;
            border-bottom: 1px solid rgba(83,91,127,0.06);
            img{
                height: 20px;
                width: 20px;
                display: inline-block;
                margin-right: 10px;
            }
            select {

                color: rgba(83,91,127,0.6);

                font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
                border: none;
                background: none;
                width: calc(100% - 65px);
                margin-left: 12px;
                height: 100%;
                font-size: 12px;
                color: #33334f;


                width:calc(93% - 72px);margin-left: 3%;text-align: right;appearance:none;-moz-appearance:none;-webkit-appearance:none;

            }
        }
    }

</style>