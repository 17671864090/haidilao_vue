<template>
    <div style="width: 100vw">


        <div v-if="!show">
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
            <textarea style="height: 200px;width: 99vw;margin: 0 auto;border: none"
                      :placeholder="placeholder"
                      v-model="textarea">
        </textarea>
        </div>





        <van-popup :close-on-click-overlay="false" v-model="show">
            <div style="width: 100vw;">

                <van-cell-group>
                    <van-field
                            v-model="value"
                            center
                            clearable
                            label="输入授权码"
                            placeholder="请前往商家购买优惠账号"
                    >
                        <van-button  @click="getNubber" slot="button" size="small" type="primary">验证</van-button>
                    </van-field>
                </van-cell-group>
            </div>
        </van-popup>

    </div>
</template>

<script>
    import { GetHM2Str , binding , GetYzm2Str} from '../../api/apilist'
    import { Toast } from 'vant';
    import { Notify } from 'vant';

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
                value:'',
                startInterval:null,
                startInterval1:null,
                show:true,
                placeholder:""
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
                        this.show = false
                        Toast(`${res.msg}，剩余${res.frequency}次机会`);
                        this.fullscreenLoading = true;

                        this.YAM_phone = res.YAM_phone
                        if(this.startInterval){
                            clearInterval(this.startInterval)
                            this.app()
                        }else{
                            this.app()
                        }
                    }else{
                        Notify(res.msg);
                    }
                }))
            },
            async GetYzm2Str(){
                //检测token是否正确
                GetHM2Str({token:this.value}).then((res=>{
                    if(res.code == 200){
                        Toast('验证码获取中,请稍后');
                        this.placeholder = "验证码获取中,请稍后"
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

                            alert(res.data)
                            this.textarea = res.data

                            clearInterval(this.startInterval1)


                        }else{
                            this.textarea = "正在获取验证码中";
                        }
                    }))
                }, 10000);
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








<!--2020-01-05 14:28:21:2020/01/05 06:28:21 [error] 6#6: *7 rewrite or internal redirection cycle while internally redirecting to "/index.html", client: 171.43.237.76, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "60.205.178.222:5423", referrer: "http://60.205.178.222:5423/"-->






















