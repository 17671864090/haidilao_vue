<template>


    <div>






        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="手机号码">
                <textarea style="height: 200px" class="el-textarea__inner" v-model="data"></textarea>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="AddSubmit">执行导入</el-button>

            </el-form-item>
        </el-form>





        <el-row :gutter="20">


            <el-col :span="8">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>监控信息</span>
                        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                    </div>
                    <div class="text item" style="line-height: 45px;color: #2d374b">全部号码:{{all}}条</div>
                    <div class="text item" style="line-height: 45px;color: limegreen">可用账号:{{a}}条</div>
                    <div class="text item" style="line-height: 45px;color: red">异常号码:{{b}}条</div>
                    <div class="text item" style="line-height: 45px;color: darkorchid">已用账号:{{c}}条</div>


                    <el-col :span="12">
                        <div style="height: 20px;width: 1px"></div>

                        <div class="grid-content bg-purple">
                            <el-progress type="circle" status="success" :percentage="aa"></el-progress>
                            <p style="color: #545454">可用账号</p>
                        </div>
                        <div style="height: 20px;width: 1px"></div>

                    </el-col>
                    <el-col :span="6">
                        <div style="height: 20px;width: 1px"></div>

                        <div class="grid-content bg-purple">
                            <el-progress type="circle" status="warning" :percentage="bb"></el-progress>
                            <p style="color: #545454">异常账号</p>
                        </div>
                        <div style="height: 20px;width: 1px"></div>

                    </el-col>
                </el-card>
                </el-col>
        </el-row>

    </div>
</template>
<script>


    import { addYZM , GetHM2StrAll} from '../../api/apilist'
    export default {
        name: "addgoods_card",
        data() {
            return {
                form: {
                    price:'',
                    shopname: '',
                    tableXing: '',
                    date:[],
                },
                data:'', //店铺
                currentRate: 0,


                a:0,
                b:0,
                c:0,
                all:0,
                aa:0,
                bb:0


            }
        },
        computed: {
            text() {
                return this.currentRate.toFixed(0) + '%'
            }
        },
        mounted() {
            this.dataa()
        },
        methods:{

            async dataa(){
                const data= await GetHM2StrAll()
                this.all = data.YAM.length
                for(var b in data.YAM){
                    if(data.YAM[b].YAM_Status == 1 && data.YAM[b].Token == null){
                        this.a += 1
                    } if(data.YAM[b].Token){
                        this.c += 1
                    } if(data.YAM[b].YAM_Status !== 1){
                        this.b += 1

                    }
                }
                this.aa = Math.ceil(this.a / this.all * 100)
                this.bb = Math.ceil(this.b / this.all * 100)

            },

            async AddSubmit(){



                var uidArr = this.data.split(/[(\r\n)\r\n]+/);



                await addYZM(uidArr).then((res=> {

                    console.log(res)


                }))
            }

        }
    }
</script>
<style scoped></style>