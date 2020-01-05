<template>
    <div style="width: 100vw">
        <van-search v-model="value" placeholder="请输入授权码" show-action shape="round">
            <div slot="action" @click="getNubber">获取号码</div>
        </van-search>
        <div style="height: 20px"></div>
        <el-card class="box-card">
            <div class="text item">
<!--                <el-select v-model="value" placeholder="请选择" style="width: 90vw">-->
<!--                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
<!--                </el-select>-->
                <div style="height: 20px"></div>
                <el-input style="width: 90vw" v-model="YAM_phone" placeholder="手机号"></el-input>
                <div style="height: 20px"></div>
                <el-button round style="width: 90vw" @click="GetYzm2Str">点击获取验证码</el-button>
            </div>
        </el-card>
        <div style="height: 20px"></div>
        <textarea style="height: 200px;width: 99vw;margin: 0 auto"
                placeholder="接收验证码短信："
                v-model="textarea">
        </textarea>
    </div>
</template>

<script>
    import { GetHM2Str , binding , GetYzm2Str} from '../../api/apilist'
    import { Toast } from 'vant';
    export default {
        name: "yzm",
        data(){
            return{
                options: [{
                    value: '1',
                    label: '海底捞(禁止刷单仅测试用)'
                }],
                textarea: '',
                YAM_phone:"",
                value:599940,
                startInterval:null,
                startInterval1:null
            }
        },
        methods:{
            app(){
                this.startInterval  = setInterval(()=>{
                    binding({data:this.YAM_phone})
                }, 5000);
            },
            async getNubber(){
                window.clearInterval(this.startInterval1)

                //检测token是否正确
                GetHM2Str({token:this.value}).then((res=>{
                    if(res.code == 200){
                        this.YAM_phone = res.YAM_phone
                        if(this.startInterval){
                            clearInterval(this.startInterval)
                            this.app()
                        }else{
                            this.app()
                        }
                    }else{
                        alert(res.msg)
                    }
                }))
            },
            async GetYzm2Str(){
                //检测token是否正确
                GetHM2Str({token:this.value}).then((res=>{
                    if(res.code == 200){
                        Toast('验证码获取中,请稍后');
                        if(this.startInterval1){
                            clearInterval(this.startInterval1)
                            this.app1()
                        }else{
                            this.app1()
                        }
                    }else{
                        alert(res.msg)
                    }
                }))
            },
            async app1(){
                this.startInterval1 = setInterval(()=>{
                    this.Vue_GetYzm2Str().then((res=>{
                        console.log(res.data)
                        if(res.code == 200){
                            Toast('获取成功');
                            clearInterval(this.startInterval1)
                            this.textarea = res.data
                        }else{

                            var myDate = new Date();

                            var mytime=myDate.toLocaleTimeString();


                            this.textarea = "最新状态码:" + res.msg + "当前时间" + mytime;
                        }
                    }))
                }, 5000);
            },


            async Vue_GetYzm2Str(){

                const data = {
                    hm:this.YAM_phone,
                    token:this.value,

                }

                const data1 = await GetYzm2Str(data)
                return data1
            }
        }
    }
</script>

<style scoped>
    textarea{
        height: 200px;
    }

</style>