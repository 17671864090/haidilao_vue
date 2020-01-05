<template>
    <div style="width: 100vw">
        <van-search v-model="value" placeholder="请输入授权码" show-action shape="round">
            <div slot="action" @click="getNubber">获取手机号</div>
        </van-search>
        <div style="height: 20px"></div>
        <el-card class="box-card">
            <div class="text item">
<!--                <el-select v-model="value" placeholder="请选择" style="width: 90vw">-->
<!--                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
<!--                </el-select>-->
                <div style="height: 20px"></div>
                <el-input style="width: 90vw" v-model="YAM_phone" placeholder="手机号(获取/指定)"></el-input>
                <div style="height: 20px"></div>
                <el-button round style="width: 90vw" @click="GetYzm2Str">获取验证码</el-button>
            </div>
        </el-card>
        <div style="height: 20px"></div>
        <textarea style="height: 200px;width: 100vw"
                placeholder="验证码内容"
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
                value:null,
                startInterval:null
            }
        },
        methods:{

            onSearch(){
                alert('验证成功')
            },


            app(){
                this.startInterval  = setInterval(()=>{
                    binding({data:this.YAM_phone})
                }, 5000);
            },



            async getNubber(){

                GetHM2Str({token:this.value}).then((res=>{

                    if(res.code == 200){
                    this.YAM_phone = res.YAM_phone

                    clearInterval(this.startInterval)


                    this.app()

                    }else{
                        alert(res.msg)
                    }
                }))



            },
            async GetYzm2Str(){
                Toast('验证码获取中,请稍后');
                const id = setInterval(()=>{
                    this.Vue_GetYzm2Str().then((res=>{
                        console.log(res)
                       if(res.code == 200){
                           Toast('获取成功');
                           window.clearInterval(id)
                           this.textarea = res.data
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