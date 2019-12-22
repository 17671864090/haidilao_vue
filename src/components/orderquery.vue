<template>
    <div>
        <van-nav-bar
                title="卡密查询"
                left-text="返回首页"
                @click-left="onClickLeft"
                left-arrow
        />
        <div class="wrapper" style="  background: #2a62ff;font-size: 16px">
            <div style="width: 94%;background: #fff;box-shadow: 0 0.066667rem 0.533333rem 0 rgba(149,176,250,.22);
    border-radius: .133333rem;
    position: relative;margin: .4rem auto .5rem;
    padding-top: .666667rem;
    padding-bottom: .826667rem;font-size: 12px;font-weight: 500;color: #545454;padding-left: 15px">
                <p style="font-size: 12px;    line-height: 32px;">
                    <img style="width: 13px;height: 13px;padding-right: 10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAMAAAA4a6b0AAAA4VBMVEUqYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv9Cpo8eAAAASnRSTlMAqNVD+NQDh/HrDfeDAvLs/IjY9tb1rIyBlznB4MU/43Fa17XuTeXw9OhgPSt/VZhUlHiuPNx8lWVrc4sHZOGNrYT76RDn+e+880nBfo0AAADLSURBVHhefcvXTsMAEAXRG+PYgHsCSei99957n///IGwTKzisOA9XK41Wpen1JVXmF7Y1sMOeKvssqnSY+X54wlzo/whXmMnv7FJtbChhotl07vOpzLbySZ81ScMS8E95Y9kxpK5a2FaVsDZi2Ei1iSxbaJRx1exGxY79LQf07HIEx2aZgky1cnp2rtwFdFUvV3BdftxoqNw24K4HvoaL1AF4kFH0CE/6XWLU1+lq4KX4eY28gnJeX+QlqM174JY+YrcSuKDPGMuX8w2NBzNZhH98nAAAAABJRU5ErkJggg==">订单编号：{{data._id}}</p>
                <p style="font-size: 12px;    line-height: 32px;">
                    <img style="width: 13px;height: 13px;padding-right: 10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAMAAAA4a6b0AAAA4VBMVEUqYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv9Cpo8eAAAASnRSTlMAqNVD+NQDh/HrDfeDAvLs/IjY9tb1rIyBlznB4MU/43Fa17XuTeXw9OhgPSt/VZhUlHiuPNx8lWVrc4sHZOGNrYT76RDn+e+880nBfo0AAADLSURBVHhefcvXTsMAEAXRG+PYgHsCSei99957n///IGwTKzisOA9XK41Wpen1JVXmF7Y1sMOeKvssqnSY+X54wlzo/whXmMnv7FJtbChhotl07vOpzLbySZ81ScMS8E95Y9kxpK5a2FaVsDZi2Ei1iSxbaJRx1exGxY79LQf07HIEx2aZgky1cnp2rtwFdFUvV3BdftxoqNw24K4HvoaL1AF4kFH0CE/6XWLU1+lq4KX4eY28gnJeX+QlqM174JY+YrcSuKDPGMuX8w2NBzNZhH98nAAAAABJRU5ErkJggg==">付款方式：点数</p>
<!--                <p>付款信息：<span id="paystatus">付款成功</span></p>-->
<!--                <p>订单金额：0.50</p>-->
                <p style="font-size: 12px;    line-height: 32px;">
                    <img style="width: 13px;height: 13px;padding-right: 10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAMAAAA4a6b0AAAA4VBMVEUqYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv8qYv9Cpo8eAAAASnRSTlMAqNVD+NQDh/HrDfeDAvLs/IjY9tb1rIyBlznB4MU/43Fa17XuTeXw9OhgPSt/VZhUlHiuPNx8lWVrc4sHZOGNrYT76RDn+e+880nBfo0AAADLSURBVHhefcvXTsMAEAXRG+PYgHsCSei99957n///IGwTKzisOA9XK41Wpen1JVXmF7Y1sMOeKvssqnSY+X54wlzo/whXmMnv7FJtbChhotl07vOpzLbySZ81ScMS8E95Y9kxpK5a2FaVsDZi2Ei1iSxbaJRx1exGxY79LQf07HIEx2aZgky1cnp2rtwFdFUvV3BdftxoqNw24K4HvoaL1AF4kFH0CE/6XWLU1+lq4KX4eY28gnJeX+QlqM174JY+YrcSuKDPGMuX8w2NBzNZhH98nAAAAABJRU5ErkJggg==">实付款：0.50</p>
            </div>
            <dl>
<!--                <dd id="tips0">(已发货/购买数：<font color="green">1</font>/1)</dd>-->
                <dd id="cardinfo0" style="width: 94%;background: #fff;box-shadow: 0 0.066667rem 0.533333rem 0 rgba(149,176,250,.22);
    border-radius: .133333rem;
    position: relative;margin: .4rem auto .5rem;
    padding-top: .666667rem;
    padding-bottom: .826667rem;font-size: 12px;font-weight: 500;color: #545454;padding-left: 15px">
                    <p style="font-weight: 700;font-size: 12px;padding-bottom: 20px"><img style="width: 20px;height: 13px;padding-right: 10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZAQMAAABqwb7SAAAABlBMVEUvdf////+8FEFwAAAAEElEQVR4XmPAD5h/oBPUBABP6gPtfu60NwAAAABJRU5ErkJggg==">你购买的卡密：
                        <div style="color: #767ead;font-family: 微软雅黑;word-wrap: break-word;font-size: 12px;
    color: #545454;">{{data.date[0]}}----{{data.date[1]}}----{{data.date[2]}}号桌----{{data.date[3]}}----{{data.date[4]}}</div>
                    </dd>
            </dl></div>
    </div>
</template>

<script>
    import {GetOrder} from "../api/apilist";
    export default {
        name: "orderquery",
        data(){
            return{
                data:null
            }
        },
        created(){
            var query = this.$route.params;
            // 查询订单
            GetOrder(query).then((res=>{
                this.data = res.data
            }))
        },
        methods:{
            onClickLeft() {
                this.$router.push({path:'/login'})
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper{
        width: calc(100% - 24px);
        padding: 12px;
        border-radius: 3px;
        float: left;
        font-size: 14px !important
        line-height: 32px;
        color: #33334f;
        height 100vh
        /* overflow: hidden; */
        /* text-overflow: ellipsis; */
        /* white-space: nowrap; */
        margin-right: 24px;
        h3{
            font-weight: lighter;
            font-size: 14px;
            color: #767ead;
            margin-bottom: 12px;
            .icon-shijian{
                font-size: 16px;
                /* vertical-align: text-bottom; */
                margin-right: 8px;
                color: rgba(100,143,247,1);font-weight: bold;
            }
        }
    }

</style>