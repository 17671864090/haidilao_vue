<template>
    <div>
<!--        <van-nav-bar-->
<!--                title="收银台"-->
<!--                left-text="返回"-->
<!--                left-arrow-->
<!--                @click-left="onClickLeft"-->
<!--        />-->

        <form id="payForm" name="p" method="get" action="/index/pay/payment"> <input type="hidden" name="trade_no" value="YKP191213205705206822">
            <div class="order_show">
                <div class="order_pay">
                    <img style=" height:64px;width:64px;float: left;
    margin-right: 20px;" src="https://www.yuekapu.com/static/app/images/order_pay.png" alt="">
                    <p style="margin: 0;    line-height: 30px;
    font-size: 16px;
    color: #333;
    float: left;">
                        订单提交成功,请及时付款<br>
                        支付方式：
                        <span style="font-size: 16px;">点数</span>
                    </p>
                    <div style="clear: both">
                    </div>
                </div>
                <div class="order_info">
<!--                    订单编号： xxxxxxx                <br>-->
<!--                    商品名称： 冰域瞬移天卡                <br>-->
                    购买数量： 1            </div>
<!--                <div class="ymm-prompt form-group">-->
<!--                    <p style="padding-left: 16px;">-->
<!--                        <input style="display:inline-block;vertical-align: middle;" id="check" class="checkbox" name="agree" type="checkbox" checked="">-->
<!--                        <span class="color1" style="font-size: 12px;">点击同意<a id="agreement" href="javascript:;" target="_blank" style="margin-top:-1px;display:inline-block;font-size: 12px;text-decoration: none;color: crimson;">《用户协议》</a>-->
<!--                    </span>-->
<!--                    </p>-->
<!--                </div>-->
                <div class="paybtn" id="d1">


                    <button @click="pay" class="order_btn1" style="    background: crimson;    display: block;
    text-decoration: none;
    color: #fff;
    margin: 10px;
    float: left;
    height: 40px;
    line-height: 40px;
    width: calc(50% - 20px);
    text-align: center;
    border-radius: 3px;
    font-size: 12px;" type="button" id="pay_btn" v-loading.fullscreen.lock="fullscreenLoading">确认付款</button>


<!--                    <el-button style="    background: crimson;    display: block;-->
<!--    text-decoration: none;-->
<!--    color: #fff;-->
<!--    margin: 10px;-->
<!--    float: left;-->
<!--    height: 40px;-->
<!--    line-height: 40px;-->
<!--    width: calc(50% - 20px);-->
<!--    text-align: center;-->
<!--    border-radius: 3px;-->
<!--    font-size: 12px;"-->
<!--                            type="primary"-->
<!--                            @click="pay"-->
<!--                            v-loading.fullscreen.lock="fullscreenLoading">-->
<!--                        确认付款-->
<!--                    </el-button>-->


<!--                    <a onclick="back_url()" style="    display: block;    background: #ccc;-->
<!--    text-decoration: none;-->
<!--    color: #fff;-->
<!--    margin: 10px;-->
<!--    float: left;-->
<!--    height: 40px;-->
<!--    line-height: 40px;-->
<!--    width: calc(50% - 20px);-->
<!--    text-align: center;-->
<!--    border-radius: 3px;-->
<!--    font-size: 12px;" class="order_btn2">取消订单</a>-->
                </div>
                <div class="paybtn" style="display:none;" id="d2">
                    <a onclick="back_url()" class="order_btn2">返回商品</a>
                    <a href="/orderquery?orderid=YKP191213205705206822" id="pay" target="_parent" class="order_btn1"> 等待付款中...</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { payorder } from '../api/apilist'
    export default {
        name: "listorder",
        data(){
            return{
                id:this.$route.params,
                fullscreenLoading: false

            }
        },
        methods:{

            openFullScreen1() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 2000);
            },
            onClickLeft() {
                this.$router.go(-1);
            },
            async pay(){
                this.fullscreenLoading = true;

                const data = await payorder(this.$route.params)
                if(data.status == 1){
                    this.fullscreenLoading = false;

                    this.$notify({
                        title: '支付成功',
                        message: '请及时保留截图',
                        type: 'success'
                    });
                    this.$router.push({ path: `/links/orderquery/${data.data}`})
                }else{
                    this.fullscreenLoading = false;

                    this.$notify({
                        message: data.success,
                        type: 'error'
                    });
                }
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .order_show{
        padding: 20px;
        .order_pay{
            line-height: 30px;
            font-size: 16px;
            color: #333;
            padding: 20px;
            /* border-bottom: 1px solid #eee; */
            .order_pay img {
                float: left;
                margin-right: 20px;
                height:64px;
                width 64px;
            }
            .order_pay p {
                margin: 0;
                float: left;
                .order_pay p span {
                    color: crimson;
                }
            }
        }
        .order_info {
            line-height: 30px;
            font-size: 14px;
            color: #666;
            padding: 20px;
        }
    }

</style>